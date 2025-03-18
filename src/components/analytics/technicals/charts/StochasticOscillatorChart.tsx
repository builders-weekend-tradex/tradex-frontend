import React, { useEffect, useRef, useState } from "react";
import { fetchSingleChart } from "../../../../utilities/api";
import { StochasticOscillatorChartProps } from "../../../../types/interfaces";

const StochasticOscillatorChart: React.FC<StochasticOscillatorChartProps> = ({
  symbol,
}) => {
  const [chartHtml, setChartHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadChart = async () => {
      try {
        const response = await fetchSingleChart(
          "stochastic_oscillator_plot",
          symbol
        );
        setChartHtml(response); // Save the HTML content
      } catch {
        setError("Failed to load chart.");
      } finally {
        setLoading(false);
      }
    };

    loadChart();
  }, [symbol]);

  useEffect(() => {
    if (chartHtml && chartContainerRef.current) {
      // Inject HTML content into the container
      chartContainerRef.current.innerHTML = chartHtml;

      // Ensure that scripts embedded in the response are executed
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
      {/* Render the chart inside the div container */}
      <div ref={chartContainerRef} />
    </div>
  );
};

export default StochasticOscillatorChart;
