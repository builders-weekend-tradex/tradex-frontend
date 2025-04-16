import React, { useEffect, useRef, useState } from "react";
import { fetchSingleChart } from "../../../../utilities/api";
import { ChartComponentProps } from "../../../../types/interfaces";
import TradexLogo from "../../../../assets/tradex-logo.svg";

const chartCache: Record<string, string> = {};

const ChartComponent: React.FC<ChartComponentProps> = ({ ticker, chartName }) => {
  const [chartHtml, setChartHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  const handleError = (message: string) => {
    setError(message);
    setLoading(false);
  };

  const loadChart = async () => {
    setLoading(true);
    setError(null);

    const cacheKey = `${ticker}_${chartName}`;
    if (chartCache[cacheKey]) {
      setChartHtml(chartCache[cacheKey]);
      setLoading(false);
      return;
    }

    try {
      const response = await fetchSingleChart(chartName, ticker);
      chartCache[cacheKey] = response;
      setChartHtml(response);
    } catch {
      handleError("Failed to load chart.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadChart();
  }, [ticker, chartName]);

  useEffect(() => {
    if (chartHtml && chartContainerRef.current) {
      chartContainerRef.current.innerHTML = chartHtml;

      const scriptTags = chartContainerRef.current.querySelectorAll("script");
      scriptTags.forEach((script) => {
        const newScript = document.createElement("script");
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.innerHTML = script.innerHTML;
        }
        document.body.appendChild(newScript);
      });
    }
  }, [chartHtml]);

  return (
    <div className="mt-6 p-4 min-h-130 min-w-60 flex justify-center items-center">
      {loading ? (
        <div>
          <img
            src={TradexLogo}
            alt="Loading"
            className="w-40 h-40 animate-pulse"
          />
        </div>
      ) : error ? (
        <div>
          <img
            src={TradexLogo}
            alt="Loading"
            className="w-40 h-40 animate-pulse"
          />
          <p className="text-gray-900 bg-black">{error}</p>
        </div>
      ) : (
        <div ref={chartContainerRef} />
      )}
    </div>
  );
};

export default ChartComponent;
