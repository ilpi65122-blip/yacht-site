// Placeholder yacht data — swap for real listings later.
// Each yacht: id, name, type ('buy' | 'rent'), price (number), unit, length (m), location, description.
const YACHTS = [
  {
    id: 1,
    name: "Azure Dream",
    type: "rent",
    price: 12000,
    unit: "/ week",
    length: 24,
    location: "Monaco",
    description:
      "A sleek 24-metre cruiser built for the Riviera. Sun deck, four cabins, and a crew of five for effortless weeks at sea.",
  },
  {
    id: 2,
    name: "Sea Serenity",
    type: "buy",
    price: 2400000,
    unit: "",
    length: 30,
    location: "Palma de Mallorca",
    description:
      "Timeless 30-metre motor yacht in impeccable condition. Teak decks, a full-beam master suite, and long-range tanks.",
  },
  {
    id: 3,
    name: "Ocean Pearl",
    type: "rent",
    price: 8500,
    unit: "/ week",
    length: 18,
    location: "Ibiza",
    description:
      "An agile 18-metre day-and-night charter favourite. Perfect for island hopping with shaded lounging and a swim platform.",
  },
  {
    id: 4,
    name: "Nautilus",
    type: "buy",
    price: 5900000,
    unit: "",
    length: 42,
    location: "Monaco",
    description:
      "Flagship 42-metre superyacht. Six staterooms, a jacuzzi, a beach club, and a tender garage. A true statement on the water.",
  },
  {
    id: 5,
    name: "Wind Whisper",
    type: "rent",
    price: 5200,
    unit: "/ week",
    length: 15,
    location: "Split",
    description:
      "A spirited 15-metre sailing yacht for the Dalmatian coast. Intimate, elegant, and a joy under canvas.",
  },
  {
    id: 6,
    name: "Blue Horizon",
    type: "buy",
    price: 1150000,
    unit: "",
    length: 20,
    location: "Athens",
    description:
      "An approachable 20-metre cruiser with classic lines. Three cabins, a generous cockpit, and a well-kept engine room.",
  },
];

// Format a price for display, e.g. 2400000 -> "$2,400,000".
function formatPrice(n) {
  return "$" + n.toLocaleString("en-US");
}
