import SocialTab from "../analytics/social/SocialTab";
import FundamentalsTab from "../analytics/fundamentals/FundamentalsTab";
import TechnicalsTab from "../analytics/technicals/TechnicalsTab";
import { useState } from "react";

const AnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "social" | "fundamentals" | "technicals"
  >("social");

  return (
    <div className="w-full">
      <div className="flex space-x-1">
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === "social"
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("social")}
        >
          Social
        </button>
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === "fundamentals"
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("fundamentals")}
        >
          Fundamentals
        </button>
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === "technicals"
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("technicals")}
        >
          Technicals
        </button>
      </div>
      <div className="min-h-screen">
        {activeTab === "social" && <SocialTab />}
        {activeTab === "fundamentals" && <FundamentalsTab />}
        {activeTab === "technicals" && <TechnicalsTab />}
      </div>
    </div>
  );
};

export default AnalyticsPage;
