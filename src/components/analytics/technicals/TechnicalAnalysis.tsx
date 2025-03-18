import { useEffect, useState } from "react";
import { fetchTechnicalAnalysis } from "../../../utilities/api"; // Assuming this fetches the data
import { useTranslation } from "react-i18next";

const TechnicalAnalysis: React.FC = () => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const loadAnalysis = async () => {
      try {
        const response = await fetchTechnicalAnalysis("GOOG"); // Fetch the analysis data
        setAnalysis(response.analysis); // Set the analysis text
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
      {/* This is intended as a Heading for the chart that will be shown underneath */}
      <h2 className="text-gray-900 text-2xl font-bold text-left pl-3">
        {t("analytics_page.technicals.technical_analysis")}
      </h2>

      {analysis ? (
        <pre className="whitespace-pre-line text-gray-700">{analysis}</pre> // Render the text analysis
      ) : (
        <p>No analysis available</p>
      )}
    </div>
  );
};
export default TechnicalAnalysis;
