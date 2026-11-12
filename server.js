// Minimal backend for the yacht site + CRM. No external dependencies — Node's built-in http only.
// Serves the static files AND a small enquiries API backed by a JSON file (data/enquiries.json).
//
//   node server.js            # then open http://localhost:3000
//
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const DATA_FILE = path.join(DATA_DIR, "enquiries.json");

// Seed data used the first time the server runs (mirrors the old placeholder enquiries).
const SEED = [
  { id: 1, yacht: "Azure Dream",  name: "Laura Bennett", email: "laura.bennett@example.com", date: "2026-11-10", status: "New",       message: "Interested in chartering Azure Dream for a week in July. Is it available?", notes: "" },
  { id: 2, yacht: "Nautilus",     name: "Marco Rossi",   email: "m.rossi@example.com",        date: "2026-11-09", status: "Contacted", message: "Could you send the full spec and a viewing date for Nautilus?",            notes: "Sent spec PDF 11 Nov. Awaiting reply." },
  { id: 3, yacht: "Ocean Pearl",  name: "Sophie Dubois", email: "sophie.d@example.com",       date: "2026-11-09", status: "New",       message: "Looking to rent Ocean Pearl for a weekend in Ibiza. What's included?",     notes: "" },
  { id: 4, yacht: "Sea Serenity", name: "James Carter",  email: "jcarter@example.com",        date: "2026-11-05", status: "Closed",    message: "Is Sea Serenity still for sale? Keen to arrange a survey.",                notes: "Buyer went with another broker." },
  { id: 5, yacht: "Wind Whisper", name: "Elena Petrova", email: "elena.p@example.com",        date: "2026-11-08", status: "Contacted", message: "Availability for Wind Whisper along the Dalmatian coast in August?",       notes: "Called 10 Nov, sending quote." },
  { id: 6, yacht: "Blue Horizon", name: "Thomas Muller", email: "t.muller@example.com",       date: "2026-11-11", status: "New",       message: "Price negotiable on Blue Horizon? Cash buyer, ready to move quickly.",     notes: "" },
  { id: 7, yacht: "Nautilus",     name: "Aisha Khan",    email: "aisha.khan@example.com",     date: "2026-11-02", status: "Closed",    message: "Charter enquiry for Nautilus — corporate event for 12 guests.",            notes: "Booked and completed." },
  { id: 8, yacht: "Azure Dream",  name: "Liam O'Connor", email: "liam.oconnor@example.com",   date: "2026-11-11", status: "New",       message: "Does Azure Dream come with crew? Looking at late season.",                 notes: "" },
];

const STATUSES = ["New", "Contacted", "Closed"];

function ensureData() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify(SEED, null, 2));
}
function readData() {
  try { return JSON.parse(fs.readFileSync(DATA_FILE, "utf8")); } catch (e) { return []; }
}
function writeData(list) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));
}

const MIME = { ".html": "text/html", ".css": "text/css", ".js": "application/javascript", ".json": "application/json" };

function sendJSON(res, code, obj) {
  res.writeHead(code, { "Content-Type": "application/json" });
  res.end(JSON.stringify(obj));
}

const MAX_BODY = 64 * 1024; // 64 KB — enough for an enquiry, caps memory use.
function readBody(req) {
  return new Promise((resolve) => {
    let b = "";
    let tooBig = false;
    req.on("data", (c) => {
      if (tooBig) return;
      b += c;
      if (b.length > MAX_BODY) { tooBig = true; req.destroy(); resolve(null); }
    });
    req.on("end", () => {
      if (tooBig) return;
      try { resolve(JSON.parse(b || "{}")); } catch (e) { resolve({}); }
    });
    req.on("error", () => resolve(null));
  });
}

// Only these file types are served statically (JSON is served via the API, not as files).
const STATIC_TYPES = { ".html": "text/html", ".css": "text/css", ".js": "application/javascript" };
function serveStatic(req, res) {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  if (p.endsWith("/")) p += "index.html";

  // Block sensitive paths: dotfiles/.git, server source, data dir, config, internal docs.
  if (/(^|\/)\./.test(p) || p === "/server.js" || p === "/package.json" ||
      p.startsWith("/data/") || /\.md$/i.test(p)) {
    res.writeHead(404); return res.end("not found");
  }

  const file = path.normalize(path.join(ROOT, p));
  // Keep requests strictly inside the project root (blocks ../ traversal).
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) { res.writeHead(403); return res.end("forbidden"); }
  // Only serve known web asset types.
  const type = STATIC_TYPES[path.extname(file).toLowerCase()];
  if (!type) { res.writeHead(404); return res.end("not found"); }

  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end("not found"); }
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const url = req.url.split("?")[0];

  // --- API ---
  if (url === "/api/enquiries" && req.method === "GET") {
    return sendJSON(res, 200, readData());
  }
  if (url === "/api/enquiries" && req.method === "POST") {
    const body = await readBody(req);
    if (!body) return sendJSON(res, 413, { error: "payload too large" });
    const name = (body.name || "").trim().slice(0, 200);
    const email = (body.email || "").trim().slice(0, 200);
    const message = (body.message || "").trim().slice(0, 2000);
    if (!name || !email || !message) return sendJSON(res, 400, { error: "name, email and message are required" });
    const list = readData();
    const id = list.reduce((m, e) => Math.max(m, e.id), 0) + 1;
    const enquiry = {
      id,
      yacht: (body.yacht || "General enquiry").trim().slice(0, 100),
      name, email, message,
      date: new Date().toISOString().slice(0, 10),
      status: "New",
      notes: "",
    };
    list.push(enquiry);
    writeData(list);
    return sendJSON(res, 201, enquiry);
  }
  const m = url.match(/^\/api\/enquiries\/(\d+)$/);
  if (m && (req.method === "POST" || req.method === "PATCH")) {
    const id = Number(m[1]);
    const body = await readBody(req);
    if (!body) return sendJSON(res, 413, { error: "payload too large" });
    const list = readData();
    const e = list.find((x) => x.id === id);
    if (!e) return sendJSON(res, 404, { error: "not found" });
    if (typeof body.status === "string" && STATUSES.includes(body.status)) e.status = body.status;
    if (typeof body.notes === "string") e.notes = body.notes.slice(0, 2000);
    writeData(list);
    return sendJSON(res, 200, e);
  }

  // --- static ---
  serveStatic(req, res);
});

ensureData();
// Bind to localhost only. The CRM API has no authentication yet (see PROJECT.md "Known for later"),
// so the server must NOT be exposed on the network. Add a login before changing this host or deploying.
const HOST = "127.0.0.1";
server.listen(PORT, HOST, () => console.log("Yacht site + CRM running on http://localhost:" + PORT));
