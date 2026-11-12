// Placeholder enquiries — swap for real ones later.
// Fields yacht/name/email/message mirror the site's contact form (see ../contact.html, ../data.js).
// status/date/notes are added by the CRM for tracking.
const ENQUIRIES = [
  { id: 1, yacht: "Azure Dream",  name: "Laura Bennett",   email: "laura.bennett@example.com",  date: "2026-11-10", status: "New",       message: "Interested in chartering Azure Dream for a week in July. Is it available?", notes: "" },
  { id: 2, yacht: "Nautilus",     name: "Marco Rossi",     email: "m.rossi@example.com",        date: "2026-11-09", status: "Contacted", message: "Could you send the full spec and a viewing date for Nautilus?",            notes: "Sent spec PDF 11 Nov. Awaiting reply." },
  { id: 3, yacht: "Ocean Pearl",  name: "Sophie Dubois",   email: "sophie.d@example.com",       date: "2026-11-09", status: "New",       message: "Looking to rent Ocean Pearl for a weekend in Ibiza. What's included?",     notes: "" },
  { id: 4, yacht: "Sea Serenity", name: "James Carter",    email: "jcarter@example.com",        date: "2026-11-05", status: "Closed",    message: "Is Sea Serenity still for sale? Keen to arrange a survey.",                notes: "Buyer went with another broker." },
  { id: 5, yacht: "Wind Whisper", name: "Elena Petrova",   email: "elena.p@example.com",        date: "2026-11-08", status: "Contacted", message: "Availability for Wind Whisper along the Dalmatian coast in August?",       notes: "Called 10 Nov, sending quote." },
  { id: 6, yacht: "Blue Horizon", name: "Thomas Muller",   email: "t.muller@example.com",       date: "2026-11-11", status: "New",       message: "Price negotiable on Blue Horizon? Cash buyer, ready to move quickly.",     notes: "" },
  { id: 7, yacht: "Nautilus",     name: "Aisha Khan",      email: "aisha.khan@example.com",     date: "2026-11-02", status: "Closed",    message: "Charter enquiry for Nautilus — corporate event for 12 guests.",            notes: "Booked and completed." },
  { id: 8, yacht: "Azure Dream",  name: "Liam O'Connor",   email: "liam.oconnor@example.com",   date: "2026-11-11", status: "New",       message: "Does Azure Dream come with crew? Looking at late season.",                 notes: "" },
];

const STATUSES = ["New", "Contacted", "Closed"];

// --- Persistence: status + notes overrides live in localStorage, keyed by enquiry id. ---
const STORE_KEY = "azure-crm-overrides";

function loadOverrides() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveOverride(id, patch) {
  const all = loadOverrides();
  all[id] = Object.assign({}, all[id], patch);
  localStorage.setItem(STORE_KEY, JSON.stringify(all));
}

// Return enquiries with any saved status/notes applied over the placeholder data.
function getEnquiries() {
  const overrides = loadOverrides();
  return ENQUIRIES.map((e) => Object.assign({}, e, overrides[e.id] || {}));
}
