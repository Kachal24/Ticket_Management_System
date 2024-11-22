// Array to store tickets
let tickets = JSON.parse(localStorage.getItem("tickets")) || [];

// Function to display tickets in the table
function displayTickets() {
  const tbody = document.querySelector("#ticket-table tbody");
  tbody.innerHTML = "";

  tickets.forEach((ticket, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${ticket.title}</td>
      <td>${ticket.description}</td>
      <td>${ticket.priority}</td>
      <td>
        <select onchange="updateStatus(${index}, this.value)">
          <option value="Open" ${ticket.status === "Open" ? "selected" : ""}>Open</option>
          <option value="In Progress" ${ticket.status === "In Progress" ? "selected" : ""}>In Progress</option>
          <option value="Closed" ${ticket.status === "Closed" ? "selected" : ""}>Closed</option>
        </select>
      </td>
      <td>
        <button onclick="deleteTicket(${index})">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });

  localStorage.setItem("tickets", JSON.stringify(tickets));
}

// Add a new ticket
document.querySelector("#add-ticket").addEventListener("click", () => {
  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();
  const priority = document.querySelector("#priority").value;

  if (!title || !description || !priority) {
    alert("All fields are required!");
    return;
  }

  tickets.push({ title, description, priority, status: "Open" });
  displayTickets();

  // Clear input fields
  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
  document.querySelector("#priority").value = "";
});

// Delete a ticket
function deleteTicket(index) {
  tickets.splice(index, 1);
  displayTickets();
}

// Update ticket status
function updateStatus(index, status) {
  tickets[index].status = status;
  localStorage.setItem("tickets", JSON.stringify(tickets));
}

// Generate a summary report
document.querySelector("#generate-report").addEventListener("click", () => {
  const summary = tickets.reduce(
    (acc, ticket) => {
      acc[ticket.status] = (acc[ticket.status] || 0) + 1;
      return acc;
    },
    {}
  );

  const reportDiv = document.querySelector("#report");
  reportDiv.innerHTML = `
    <p>Open: ${summary["Open"] || 0}</p>
    <p>In Progress: ${summary["In Progress"] || 0}</p>
    <p>Closed: ${summary["Closed"] || 0}</p>
  `;
});

// Initial display of tickets
displayTickets();
