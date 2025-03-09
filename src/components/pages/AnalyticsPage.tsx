import SocialTab from "../analytics/social/SocialTab";
import FundamentalsTab from "../analytics/fundamentals/FundamentalsTab";
import TechnicalsTab from "../analytics/technicals/TechnicalsTab";
import { useState } from "react";

enum Tab {
  Social = "social",
  Fundamentals = "fundamentals",
  Technicals = "technicals",
}

const AnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Social);

  return (
    <div className="w-full">
      <div className="flex space-x-1">
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === Tab.Social
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab(Tab.Social)}
        >
          Social
        </button>
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === Tab.Fundamentals
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab(Tab.Fundamentals)}
        >
          Fundamentals
        </button>
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === Tab.Technicals
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab(Tab.Technicals)}
        >
          Technicals
        </button>
      </div>
      <div className="min-h-screen bg-white">
        {activeTab === Tab.Social && <SocialTab />}
        {activeTab === Tab.Fundamentals && <FundamentalsTab />}
        {activeTab === Tab.Technicals && <TechnicalsTab />}
      </div>
    </div>
  );
};

export default AnalyticsPage;
