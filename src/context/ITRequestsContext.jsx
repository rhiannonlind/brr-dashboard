import React, { createContext, useContext, useState } from 'react';
import { formatITRequestForTickets, addTicketToData } from '../utils/ticketUtils';

const ITRequestsContext = createContext();

export function ITRequestsProvider({ children }) {
  const [requests, setRequests] = useState([]);

  const addRequest = (request) => {
    // Add to local state
    setRequests(prevRequests => [...prevRequests, request]);
    
    // Format and add to tickets data
    const formattedTicket = formatITRequestForTickets(request);
    addTicketToData(formattedTicket);
  };

  return (
    <ITRequestsContext.Provider value={{ requests, addRequest }}>
      {children}
    </ITRequestsContext.Provider>
  );
}

export function useITRequests() {
  return useContext(ITRequestsContext);
} 