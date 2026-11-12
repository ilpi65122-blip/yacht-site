// CRM data access — talks to the backend API (served by ../server.js).
// Enquiries now live on the server (data/enquiries.json), shared across browsers,
// and include real ones submitted through the site's contact form.
const STATUSES = ["New", "Contacted", "Closed"];

async function fetchEnquiries() {
  const res = await fetch("/api/enquiries");
  if (!res.ok) throw new Error("failed to load enquiries");
  return res.json();
}

async function saveEnquiry(id, patch) {
  const res = await fetch("/api/enquiries/" + id, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patch),
  });
  if (!res.ok) throw new Error("failed to save");
  return res.json();
}
