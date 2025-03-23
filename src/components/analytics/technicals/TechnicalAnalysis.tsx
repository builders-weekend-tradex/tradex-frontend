import { useEffect, useState } from "react";
import { fetchTechnicalAnalysis } from "../../../utilities/api";
import { useTicker } from "../../../hooks/useTicker";
import TradexLogo from "../../../assets/tradex-logo.svg";
import { useTranslation } from "react-i18next";

const TechnicalAnalysis: React.FC = () => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { ticker } = useTicker();

  const handleError = (message: string) => {
    setError(message);
    setLoading(false);
  };

  const loadAnalysis = async () => {
    setLoading(true);
    setError(null);

    try {
      const cachedAnalysis = sessionStorage.getItem(ticker); // Check for cached analysis using ticker as key
      if (cachedAnalysis) {
        setAnalysis(cachedAnalysis); // Use cached data
        setLoading(false); // Stop loading since data is available
        return;
      }
      const response = await fetchTechnicalAnalysis(ticker);
      setAnalysis(response.analysis);
      sessionStorage.setItem(ticker, response.analysis); // Cache the data using ticker as the key
    } catch {
      handleError("Failed to load technical analysis.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAnalysis();
  }, [ticker]); // Re-fetch the analysis if the ticker changes

  // Helper component to format and display analysis sections
  const AnalysisReport = ({ data }: { data: string }) => {
    const sections = data.split("\n\n");
    const { t } = useTranslation();
    return (
      <div className="p-4 max-w-4xl mx-auto my-6 p-8">
        {sections.map((section, index) => {
          const lines = section.split("\n");
          const firstLine = lines[0].trim();

          // Determine if it's a main heading or subheading
          const isMainHeading = index === 0; // The very first heading
          const isSubheading =
            firstLine.endsWith(":") || /^[A-Za-z\s\d-]+$/.test(firstLine);

          return (
            <div key={index} className="mb-6">
              {/* Main Heading */}
              {isMainHeading && (
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  {firstLine}
                </h1>
              )}

              {/* Subheading */}
              {!isMainHeading && isSubheading && (
                <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">
                  {firstLine}
                </h2>
              )}

              {/* Content */}
              <p className="text-gray-700 leading-relaxed">
                {isMainHeading || isSubheading
                  ? lines.slice(1).join(" ").trim()
                  : lines.join(" ").trim()}
              </p>
            </div>
          );
        })}
        <p className="mt-4 text-gray-500 italic">
          {t("analytics_page.technicals.analysis_append")}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white h-screen w-full overflow-y-auto p-4">
      {loading ? (
        <div className="h-full w-full flex justify-center items-center bg-white">
          <img
            src={TradexLogo}
            alt="Tradex Logo"
            className="w-64 h-64 animate-pulse"
          />
        </div>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : analysis ? (
        <AnalysisReport data={analysis} />
      ) : (
        <p className="text-gray-700">No analysis available</p>
      )}
    </div>
  );
};

export default TechnicalAnalysis;
