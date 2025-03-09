import SocialTab from "../analytics/social/SocialTab";
import FundamentalsTab from "../analytics/fundamentals/FundamentalsTab";
import TechnicalsTab from "../analytics/technicals/TechnicalsTab";
import { useState } from "react";
import { ActiveTab } from "../../types/ActiveTabEnum";

const AnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Social);

  return (
    <div className="w-full">
      <div className="flex space-x-1">
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === ActiveTab.Social
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab(ActiveTab.Social)}
        >
          Social
        </button>
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === ActiveTab.Fundamentals
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab(ActiveTab.Fundamentals)}
        >
          Fundamentals
        </button>
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === ActiveTab.Technicals
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab(ActiveTab.Technicals)}
        >
          Technicals
        </button>
      </div>
      <div className="min-h-screen bg-white">
        {activeTab === ActiveTab.Social && <SocialTab />}
        {activeTab === ActiveTab.Fundamentals && <FundamentalsTab />}
        {activeTab === ActiveTab.Technicals && <TechnicalsTab />}
      </div>
    </div>
  );
};

export default AnalyticsPage;
