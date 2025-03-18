import React, { useEffect, useRef, useState } from "react";
import { fetchSingleChart } from "../../../../utilities/api";
import { ChartComponentProps } from "../../../../types/interfaces";

const ChartComponent: React.FC<ChartComponentProps> = ({
  symbol,
  chartName,
}) => {
  const [chartHtml, setChartHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadChart = async () => {
      try {
        const response = await fetchSingleChart(chartName, symbol);
        setChartHtml(response);
      } catch {
        setError("Failed to load chart.");
      } finally {
        setLoading(false);
      }
    };

    loadChart();
  }, [symbol, chartName]);

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

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
      <div ref={chartContainerRef} />
    </div>
  );
};

export default ChartComponent;
