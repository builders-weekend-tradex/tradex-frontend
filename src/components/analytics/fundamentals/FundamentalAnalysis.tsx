import { useState, useEffect, useContext } from "react";
import { chatWithLexi } from "../../../utilities/api";
import { TickerContext } from "../../../context/TickerContext";
import TradexLogo from "../../../assets/tradex-logo.svg";

interface TickerContextType {
  ticker: string | null;
}

const FundamentalAnalysis: React.FC = () => {
  const { ticker } = useContext(TickerContext) as TickerContextType;

  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fundamental Analysis prompt
  const fundamentalPrompt = `Give Fundamental Analysis for /data/home/${ticker}.pdf`;

  // Fetch fundamental analysis when ticker changes or on component mount
  useEffect(() => {
    if (!ticker) return;

    // If there's already a cached response, no need to fetch again
    const cachedResponse = sessionStorage.getItem(
      "fundamentalAnalysisResponse"
    );
    if (cachedResponse) {
      setResponse(cachedResponse);
      return;
    }

    const fetchFundamentalAnalysis = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await chatWithLexi(fundamentalPrompt);
        const responseText = res.response;
        setResponse(responseText);

        // Save the response to sessionStorage
        sessionStorage.setItem("fundamentalAnalysisResponse", responseText);
      } catch {
        setError("Failed to get response from Lexi.");
      } finally {
        setLoading(false);
      }
    };

    fetchFundamentalAnalysis();
  }, [ticker]);

  return (
    <div className="bg-white h-screen w-full overflow-y-auto p-4">
      {loading && (
        <div className="h-full w-full flex justify-center items-center bg-white">
          <img
            src={TradexLogo}
            alt="Tradex Logo"
            className="w-64 h-64 animate-pulse"
          />
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      {response && !loading && !error && (
        <div className="space-y-2">
          {response.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-2">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FundamentalAnalysis;
