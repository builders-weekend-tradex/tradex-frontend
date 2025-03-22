import React, { useState } from "react";
import { TickerContext } from "../context/TickerContext";

export const TickerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ticker, setTicker] = useState("GOOG"); // Default ticker

  return (
    <TickerContext.Provider value={{ ticker, setTicker }}>
      {children}
    </TickerContext.Provider>
  );
};
