import React, { useState } from "react";
import { TickerContext } from "../context/TickerContext";

export const TickerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [symbol, setSymbol] = useState("GOOG"); // Default ticker

  return (
    <TickerContext.Provider value={{ symbol, setSymbol }}>
      {children}
    </TickerContext.Provider>
  );
};
