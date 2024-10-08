// Function to generate an HTML list from an array of clients
function generateClientList(clients) {
  return clients.map((client, index) => `
    <li class="list-group-item d-flex justify-content-between" data-id="${index}">
      ${client.name}
      <strong>$${client.balance}</strong>
    </li>
  `).reduce((html, item) => html + item, ''); // Concatenate all list items into a single string
}

// Function to sort the clients based on a given property
function sortClients(clients, key) {
  return [...clients].sort((clientA, clientB) => clientA[key] > clientB[key] ? 1 : -1);
}

// Function to calculate the sum of all clients' balances
function calculateTotalBalance(clients) {
  return clients.reduce((total, client) => total + client.balance, 0);
}

// Function to retrieve a client's information based on their index
function getClientInfo(index, clients) {
  return clients[index] || null; // Return the client object or null if not found
}

// Function to search for clients whose names match a query string
function searchClients(query, clients) {
  const lowerQuery = query.toLowerCase().trim();
  return clients.filter(client => client.name.toLowerCase().includes(lowerQuery));
}