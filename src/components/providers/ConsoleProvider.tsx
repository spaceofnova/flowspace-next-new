import React from "react";

interface ConsoleJSON {
  type: "log" | "warn" | "error";
  message: string;
}

interface ConsoleProviderProps {
  console: ConsoleJSON[];
  addToConsole: (type: ConsoleJSON["type"], message: string) => void;
}

export const ConsoleContext = React.createContext<ConsoleProviderProps>({
  console: [],
  addToConsole: () => {},
});

export default function ConsoleProvider({ children }: { children: React.ReactNode }) {
  const [console, setConsole] = React.useState<ConsoleJSON[]>([]);

  const addToConsole = (type: ConsoleJSON["type"], message: string) => {
    setConsole((prev) => [...prev, { type, message }]);
  };

  return (
    <ConsoleContext.Provider value={{console, addToConsole}}>
      {children}
    </ConsoleContext.Provider>
  );
}