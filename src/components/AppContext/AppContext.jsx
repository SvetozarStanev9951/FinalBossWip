import { createContext } from "react";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        hello: "world",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
