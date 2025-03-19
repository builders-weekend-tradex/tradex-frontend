import { useContext } from "react";
import { TickerContext } from "../context/TickerContext";
import { TickerContextType } from "../types/interfaces";

export const useTicker = (): TickerContextType => {
  const context = useContext(TickerContext);
  if (!context) {
    throw new Error("useTicker must be used within a TickerProvider");
  }
  return context;
};
