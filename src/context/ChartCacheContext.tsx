import React, { createContext, useContext, useState } from "react";
import { fetchSingleChart } from "../utilities/api";

interface ChartCacheContextType {
  charts: Record<string, string>;
  loadCharts: (ticker: string, chartNames: string[]) => Promise<void>;
}

const ChartCacheContext = createContext<ChartCacheContextType | null>(null);

export const ChartCacheProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [charts, setCharts] = useState<Record<string, string>>({});

  const loadCharts = async (ticker: string, chartNames: string[]) => {
    const newCharts: Record<string, string> = {};
    await Promise.all(
      chartNames.map(async (chartName) => {
        const key = `${ticker}_${chartName}`;
        if (!charts[key]) {
          const html = await fetchSingleChart(chartName, ticker);
          newCharts[key] = html;
        }
      })
    );
    setCharts(prev => ({ ...prev, ...newCharts }));
  };

  return (
    <ChartCacheContext.Provider value={{ charts, loadCharts }}>
      {children}
    </ChartCacheContext.Provider>
  );
};

export const useChartCache = () => {
  const context = useContext(ChartCacheContext);
  if (!context) throw new Error("useChartCache must be used within ChartCacheProvider");
  return context;
};
