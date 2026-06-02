"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface StateContextType {
  selectedState: string | null;
  setSelectedState: (state: string) => void;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

export function StateProvider({ children }: { children: React.ReactNode }) {
  const [selectedState, setSelectedStateInternal] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("selectedState");
    if (stored) {
      setSelectedStateInternal(stored);
    }
    setMounted(true);
  }, []);

  // Update localStorage when state changes
  const setSelectedState = (state: string) => {
    setSelectedStateInternal(state);
    localStorage.setItem("selectedState", state);
  };

  return (
    <StateContext.Provider value={{ selectedState, setSelectedState }}>
      {children}
    </StateContext.Provider>
  );
}

export function useSelectedState() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useSelectedState must be used within StateProvider");
  }
  return context;
}
