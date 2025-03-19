import { useContext } from "react";
import { TickerContext } from "../context/TickerContext";
import { TickerContextType } from "../types/interfaces";

const throwTickerContextError = () => {
  throw new Error("useTicker must be used within a TickerProvider");
};

export const useTicker = (): TickerContextType => {
  const context = useContext(TickerContext);
  return context ?? throwTickerContextError();
};
