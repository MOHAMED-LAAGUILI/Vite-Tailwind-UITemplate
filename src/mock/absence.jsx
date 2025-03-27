// Define absence types and their colors
const absenceTypes = {
  conge: { label: "Congé", color: "#FFF2CC" },
  sante: { label: "Santé", color: "#FFD6D6" },
  famille: { label: "Famille", color: "#D6F5EB" },
}


// Sample absence data
const absenceEvents = [
  { id: 1, employeeId: "L3ZSY", start: new Date(2025, 2, 18), end: new Date(2025, 2, 22), type: "conge" },
  { id: 2, employeeId: "X5XK7", start: new Date(2025, 2, 13), end: new Date(2025, 2, 14), type: "sante" },
  { id: 3, employeeId: "LYEGL", start: new Date(2025, 2, 25), end: new Date(2025, 2, 26), type: "conge" },
  { id: 4, employeeId: "XE3FG", start: new Date(2025, 2, 22), end: new Date(2025, 2, 29), type: "conge" },
  { id: 5, employeeId: "A2A4B", start: new Date(2025, 2, 4), end: new Date(2025, 2, 6), type: "sante" },
  { id: 6, employeeId: "HIT4D", start: new Date(2025, 2, 19), end: new Date(2025, 2, 20), type: "conge" },
  { id: 7, employeeId: "J7YFI", start: new Date(2025, 2, 13), end: new Date(2025, 2, 16), type: "sante" },
  { id: 8, employeeId: "LARIA", start: new Date(2025, 2, 21), end: new Date(2025, 2, 22), type: "sante" },
]


export {absenceEvents, absenceTypes}