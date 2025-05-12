import ticketsData from '../data/tickets.json';

// Initialize tickets from localStorage or use default data
const initializeTickets = () => {
  const savedTickets = localStorage.getItem('tickets');
  if (savedTickets) {
    return JSON.parse(savedTickets);
  }
  // If no saved tickets, initialize with default data
  localStorage.setItem('tickets', JSON.stringify(ticketsData));
  return ticketsData;
};

// Keep track of the current tickets data
let currentTicketsData = initializeTickets();

export const formatITRequestForTickets = (request) => {
  // Create a UserID from the email (everything before the @ symbol)
  const userId = request.email.split('@')[0];
  
  // Capitalize first letter of description
  const capitalizedDescription = request.description.charAt(0).toUpperCase() + request.description.slice(1);
  
  return {
    type: request.requestType.charAt(0).toUpperCase() + request.requestType.slice(1),
    status: "Pending", // Always set status to Pending for new tickets
    dateSubmitted: new Date(request.submittedAt).toISOString().split('T')[0],
    description: capitalizedDescription,
    userId: userId // Add the UserID to the ticket
  };
};

export const getTicketsData = () => {
  return currentTicketsData;
};

export const addTicketToData = (newTicket) => {
  // Add new ticket to the beginning of the rows array
  currentTicketsData.rows.unshift(newTicket);
  
  // Save to localStorage
  localStorage.setItem('tickets', JSON.stringify(currentTicketsData));
  
  return currentTicketsData;
}; 