import SocialTab from "../analytics/social/SocialTab";
import FundamentalsTab from "../analytics/fundamentals/FundamentalsTab";
import TechnicalsTab from "../analytics/technicals/TechnicalsTab";
import { useState } from "react";

const AnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "social" | "fundamentals" | "technicals"
  >("social");
  return (
    <div className="w-full sm:px-6 lg:px-8">
      {/* Tab navigation */}
      <div className="flex space-x-1 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "social"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("social")}
        >
          Social
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "fundamentals"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("fundamentals")}
        >
          Fundamentals
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "technicals"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("technicals")}
        >
          Technicals
        </button>
      </div>
      <div className="space-y-8">
        {activeTab === "social" && <SocialTab />}
        {activeTab === "fundamentals" && <FundamentalsTab />}
        {activeTab === "technicals" && <TechnicalsTab />}
      </div>
    </div>
  );
};

export default AnalyticsPage;
