import { useState } from "react";
import SocialTab from "../analytics/social/SocialTab";
import FundamentalsTab from "../analytics/fundamentals/FundamentalsTab";
import TechnicalsTab from "../analytics/technicals/TechnicalsTab";
import { ActiveTab } from "../../types/enums";
import { useTranslation } from "react-i18next";

const AnalyticsPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Social);

  const handleSetActiveTab = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full pt-2">
      <div className="flex space-x-1">
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === ActiveTab.Social
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleSetActiveTab(ActiveTab.Social)}
        >
          {t("analytics_page.tabs.social")}
        </button>
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === ActiveTab.Fundamentals
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleSetActiveTab(ActiveTab.Fundamentals)}
        >
          {t("analytics_page.tabs.fundamentals")}
        </button>
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === ActiveTab.Technicals
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleSetActiveTab(ActiveTab.Technicals)}
        >
          {t("analytics_page.tabs.technicals")}
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
