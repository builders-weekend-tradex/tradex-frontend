import { useEffect, useState } from "react";
import { fetchTechnicalAnalysis } from "../../../utilities/api";

const TechnicalAnalysis: React.FC = () => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnalysis = async () => {
      try {
        const response = await fetchTechnicalAnalysis("GOOG");
        setAnalysis(response.analysis);
      } catch {
        setError("Failed to load technical analysis.");
      } finally {
        setLoading(false);
      }
    };

    loadAnalysis();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-white min-h-full">
      {analysis ? (
        <pre className="whitespace-pre-line text-gray-700">{analysis}</pre>
      ) : (
        <p>No analysis available</p>
      )}
    </div>
  );
};
export default TechnicalAnalysis;
