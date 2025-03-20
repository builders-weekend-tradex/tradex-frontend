import React, { useCallback, useEffect, useRef, useState } from "react";
import { fetchSingleChart } from "../../../../utilities/api";
import { ChartComponentProps } from "../../../../types/interfaces";

const ChartComponent: React.FC<ChartComponentProps> = ({
  ticker,
  chartName,
  shouldFetch,
}) => {
  const [chartHtml, setChartHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  const handleError = (message: string) => {
    setError(message);
    setLoading(false);
  };

  const loadChart = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchSingleChart(chartName, ticker);
      setChartHtml(response);
    } catch {
      handleError("Failed to load chart.");
    } finally {
      setLoading(false);
    }
  }, [chartName, ticker]);

  useEffect(() => {
    if (shouldFetch) {
      loadChart();
    }
  }, [shouldFetch, loadChart]); // Added loadChart as dependency

  //   useEffect(() => {
  //     loadChart();
  //   }, [ticker, chartName]);

  //   useEffect(() => {
  //     if (shouldFetch) {
  //       loadChart();
  //     }
  //   }, [loadChart, shouldFetch]); // Trigger chart load whenever shouldFetch changes

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
    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
      {loading ? (
        <p>Loading chart...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div ref={chartContainerRef} />
      )}
    </div>
  );
};

export default ChartComponent;
