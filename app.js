// Shared rendering + filtering. Pages include only the pieces they use.

// Build one yacht card (used on Home and Listings).
function cardHTML(y) {
  const tagClass = y.type === "buy" ? "tag-buy" : "tag-rent";
  const tagText = y.type === "buy" ? "For sale" : "For charter";
  return `
    <a class="card" href="yacht.html?id=${y.id}">
      <div class="photo">${y.name}</div>
      <div class="card-body">
        <span class="tag ${tagClass}">${tagText}</span>
        <h3>${y.name}</h3>
        <div class="price">${formatPrice(y.price)} <small>${y.unit}</small></div>
        <p class="meta">${y.length} m &middot; ${y.location}</p>
      </div>
    </a>`;
}

// ---- Home: featured (first 3) ----
function renderFeatured() {
  const el = document.getElementById("featured-grid");
  if (!el) return;
  el.innerHTML = YACHTS.slice(0, 3).map(cardHTML).join("");
}

// ---- Listings: grid + filters ----
function priceInBucket(price, bucket) {
  switch (bucket) {
    case "u10k": return price < 10000;
    case "10k-100k": return price >= 10000 && price < 100000;
    case "100k-2m": return price >= 100000 && price < 2000000;
    case "o2m": return price >= 2000000;
    default: return true; // "any"
  }
}

function renderListings() {
  const grid = document.getElementById("listings-grid");
  if (!grid) return;
  const typeSel = document.getElementById("filter-type");
  const priceSel = document.getElementById("filter-price");
  const countEl = document.getElementById("listings-count");

  function apply() {
    const type = typeSel.value;
    const price = priceSel.value;
    const matches = YACHTS.filter(
      (y) => (type === "all" || y.type === type) && priceInBucket(y.price, price)
    );
    grid.innerHTML = matches.length
      ? matches.map(cardHTML).join("")
      : `<p class="count">No yachts match those filters. Try widening your search.</p>`;
    if (countEl) {
      countEl.textContent =
        matches.length + (matches.length === 1 ? " yacht" : " yachts") + " available";
    }
  }

  typeSel.addEventListener("change", apply);
  priceSel.addEventListener("change", apply);
  apply();
}

// ---- Single yacht page ----
function renderDetail() {
  const el = document.getElementById("yacht-detail");
  if (!el) return;
  const id = Number(new URLSearchParams(location.search).get("id"));
  const y = YACHTS.find((x) => x.id === id);
  if (!y) {
    el.innerHTML = `<p class="count">Yacht not found. <a href="listings.html">Back to listings</a>.</p>`;
    return;
  }
  document.title = y.name + " — Azure Yachts";
  const tagText = y.type === "buy" ? "For sale" : "For charter";
  el.innerHTML = `
    <a class="back" href="listings.html">&larr; Back to listings</a>
    <div class="detail-grid">
      <div class="photo photo-lg">${y.name}</div>
      <div>
        <span class="tag ${y.type === "buy" ? "tag-buy" : "tag-rent"}">${tagText}</span>
        <h1>${y.name}</h1>
        <div class="price">${formatPrice(y.price)} <small>${y.unit}</small></div>
        <ul class="spec">
          <li><span>Length</span><span>${y.length} m</span></li>
          <li><span>Location</span><span>${y.location}</span></li>
          <li><span>Availability</span><span>${tagText}</span></li>
        </ul>
        <p>${y.description}</p>
        <a class="btn btn-navy" href="contact.html?yacht=${encodeURIComponent(y.name)}">Enquire about this yacht</a>
      </div>
    </div>`;
}

// ---- Contact / enquiry form ----
function setupContact() {
  const form = document.getElementById("enquiry-form");
  if (!form) return;
  const yacht = new URLSearchParams(location.search).get("yacht");
  if (yacht) {
    const msg = document.getElementById("message");
    if (msg) msg.value = `I'm interested in ${yacht}. Please send me more details.`;
  }
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const note = document.getElementById("form-note");
    note.style.display = "block";
    note.textContent = "Sending…";
    const payload = {
      yacht: yacht || "General enquiry",
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad response");
      note.textContent = "Thank you — your enquiry has been sent. We'll be in touch.";
      form.reset();
    } catch (err) {
      note.textContent = "Sorry, something went wrong sending your enquiry. Please try again.";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderFeatured();
  renderListings();
  renderDetail();
  setupContact();
});
