// CRM dashboard logic. Loads enquiries from the server and saves changes back to it.
// Uses safe DOM methods (textContent) for enquiry data.
let enquiries = [];
let selectedId = null;

function el(tag, props, text) {
  const n = document.createElement(tag);
  if (props) Object.assign(n, props);
  if (text != null) n.textContent = text;
  return n;
}

function statusBadge(status) {
  return el("span", { className: "badge " + status }, status);
}

function currentFilter() {
  return document.getElementById("status-filter").value;
}

function renderTable() {
  const tbody = document.getElementById("rows");
  tbody.textContent = "";
  const filter = currentFilter();
  const list = enquiries.filter((e) => filter === "all" || e.status === filter);

  document.getElementById("count").textContent =
    list.length + (list.length === 1 ? " enquiry" : " enquiries");

  list.forEach((e) => {
    const tr = el("tr");
    if (e.id === selectedId) tr.className = "selected";
    tr.appendChild(el("td", null, e.yacht));
    tr.appendChild(el("td", null, e.name));
    tr.appendChild(el("td", null, e.date));
    const statusTd = el("td");
    statusTd.appendChild(statusBadge(e.status));
    tr.appendChild(statusTd);
    tr.addEventListener("click", () => selectEnquiry(e.id));
    tbody.appendChild(tr);
  });
}

function selectEnquiry(id) {
  selectedId = id;
  renderTable();
  renderDetail();
}

function renderDetail() {
  const panel = document.getElementById("detail");
  panel.textContent = "";
  const e = enquiries.find((x) => x.id === selectedId);
  if (!e) {
    panel.appendChild(el("p", { className: "empty" }, "Select an enquiry to view it."));
    return;
  }

  panel.appendChild(el("h2", null, e.yacht));
  panel.appendChild(el("p", { className: "who" }, e.name + " · " + e.email));

  const dl = el("dl");
  dl.appendChild(el("dt", null, "Received"));
  dl.appendChild(el("dd", null, e.date));
  dl.appendChild(el("dt", null, "Email"));
  dl.appendChild(el("dd", null, e.email));
  panel.appendChild(dl);

  panel.appendChild(el("div", { className: "msg" }, e.message));

  // Status field
  const statusField = el("div", { className: "field" });
  statusField.appendChild(el("label", { htmlFor: "status-edit" }, "Status"));
  const sel = el("select", { id: "status-edit" });
  STATUSES.forEach((s) => {
    const opt = el("option", { value: s }, s);
    if (s === e.status) opt.selected = true;
    sel.appendChild(opt);
  });
  statusField.appendChild(sel);
  panel.appendChild(statusField);

  // Notes field
  const notesField = el("div", { className: "field" });
  notesField.appendChild(el("label", { htmlFor: "notes-edit" }, "Notes"));
  const ta = el("textarea", { id: "notes-edit" });
  ta.value = e.notes || "";
  notesField.appendChild(ta);
  panel.appendChild(notesField);

  // Save
  const saveRow = el("div");
  const btn = el("button", { className: "btn" }, "Save");
  const saved = el("span", { className: "saved", id: "saved-msg" }, "Saved");
  btn.addEventListener("click", async () => {
    btn.disabled = true;
    try {
      const updated = await saveEnquiry(e.id, { status: sel.value, notes: ta.value });
      Object.assign(e, updated); // keep in-memory copy in sync
      renderTable();
      const msg = document.getElementById("saved-msg");
      if (msg) {
        msg.style.display = "inline";
        setTimeout(() => (msg.style.display = "none"), 1500);
      }
    } catch (err) {
      saved.textContent = "Save failed";
      saved.style.display = "inline";
    } finally {
      btn.disabled = false;
    }
  });
  saveRow.appendChild(btn);
  saveRow.appendChild(saved);
  panel.appendChild(saveRow);
}

async function init() {
  document.getElementById("status-filter").addEventListener("change", renderTable);
  try {
    enquiries = await fetchEnquiries();
  } catch (err) {
    document.getElementById("count").textContent = "Could not load enquiries — is the server running?";
  }
  renderTable();
  renderDetail();
}

document.addEventListener("DOMContentLoaded", init);
