// Initial queue with 5 tickets
let tickets = [
  { id: "T101", priority: "HIGH", resolved: false },
  { id: "T102", priority: "MEDIUM", resolved: true },
  { id: "T103", priority: "LOW", resolved: false },
  { id: "T104", priority: "MEDIUM", resolved: false },
  { id: "T105", priority: "HIGH", resolved: true }
];

//  Add a new urgent ticket at the FRONT
tickets.unshift({ id: "T106", priority: "HIGH", resolved: false });

//  Add two normal tickets at the END
tickets.push(
  { id: "T107", priority: "LOW", resolved: false },
  { id: "T108", priority: "MEDIUM", resolved: false }
);

//  Remove the FIRST ticket and store it
let currentTicket = tickets.shift();

//  Remove the LAST ticket (duplicate)
let droppedTicket = tickets.pop();

//  Keep only unresolved tickets
let pending = tickets.filter(ticket => ticket.resolved === false);

//  Get only the ticket IDs
let pendingIds = pending.map(ticket => ticket.id);

//  Print the results
console.log("Current Ticket:", currentTicket);
console.log("Dropped Ticket:", droppedTicket);
console.log("Pending Tickets:", pending);
console.log("Pending Ticket IDs:", pendingIds);