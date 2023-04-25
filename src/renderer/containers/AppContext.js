import { createContext, useState, useMemo } from 'react';

const initialState = {
  name: 'Persistent',
};

export const AppContext = createContext(initialState);

export default function AppProvider({ children }) {
  const [appState, setAppState] = useState({ name: 'Persistent' });
  const value = useMemo(() => {
    return {
      appState,
      setAppState,
    };
  }, [appState]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
