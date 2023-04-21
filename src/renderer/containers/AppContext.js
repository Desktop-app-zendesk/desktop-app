import React, { createContext, useState, useMemo } from 'react';

const initialState = {
  name: 'Amol',
};

export const AppContext = createContext(initialState);

export default function AppProvider({ children }) {
  const [appState, setAppState] = useState({ name: 'Amol' });
  const value = useMemo(() => {
    return {
      appState,
      setAppState,
    };
  }, [appState]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
