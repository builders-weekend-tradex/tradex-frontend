import { createContext } from "react";
import { TickerContextType } from "../types/interfaces";

// Create the context with a default value
export const TickerContext = createContext<TickerContextType | undefined>(
  undefined
);
