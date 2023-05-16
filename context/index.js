"use client";

import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export function MainContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [signInOpen, setSignInOpen] = useState(false);
  return (
    <MainContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        signInOpen,
        setSignInOpen,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  return useContext(MainContext);
}
