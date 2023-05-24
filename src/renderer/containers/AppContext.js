import { createContext, useState, useMemo } from 'react';

const initialState = {
  name: 'Persistent',
};

export const AppContext = createContext(initialState);

export default function AppProvider({ children }) {
  const [appState, setAppState] = useState({ name: 'Persistent' });
  const [ticketList, setTicketList] = useState([]);
  const [myTicketList, setMyTicketList] = useState([]);
  const value ={
      appState,
      setAppState,
      ticketList,
      setTicketList,
      myTicketList,
      setMyTicketList
    }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
