import React, { FC, createContext, useState, useMemo } from 'react';

type AppContextType = {
  state: { message?: string };
  setState: React.Dispatch<React.SetStateAction<{ message?: string }>>;
};

export const AppContext = createContext<AppContextType>({
  state: {},
  setState: () => {},
});

interface AppProps {
  children: any;
}

const AppProvider: FC<AppProps> = ({ children }) => {
  const [state, setState] = useState<{ message?: string }>({});

  const value = useMemo(() => {
    return {
      state,
      setState,
    };
  }, [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
