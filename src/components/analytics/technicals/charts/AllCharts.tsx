import { useEffect, useRef, useState } from "react";
import { useTicker } from "../../../../hooks/useTicker";

const AllCharts: React.FC = () => {
  //   const [chartHtml, setChartHtml] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const { ticker } = useTicker();

  const loadCharts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${process.env.API_BASE_URL}/analysis/tech/charts/all/?symbol=${ticker}`
      );

      if (!response.ok) throw new Error("Failed to fetch all technical charts");

      console.log("API Response:", response);
      //   const data = await response.text();
      //   setChartHtml(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharts();
  }, [ticker]);

  //   useEffect(() => {
  //     if (chartHtml && chartContainerRef.current) {
  //       chartContainerRef.current.innerHTML = chartHtml;

  //       const scriptTags = chartContainerRef.current.querySelectorAll("script");
  //       scriptTags.forEach((script) => {
  //         const newScript = document.createElement("script");
  //         if (script.src) {
  //           newScript.src = script.src;
  //         } else {
  //           newScript.innerHTML = script.innerHTML;
  //         }
  //         document.body.appendChild(newScript);
  //       });
  //     }
  //   }, [chartHtml]);

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
      {loading ? (
        <p>Loading charts...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div ref={chartContainerRef} />
      )}
    </div>
  );
};

export default AllCharts;
