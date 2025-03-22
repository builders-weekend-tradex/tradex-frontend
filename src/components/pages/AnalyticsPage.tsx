import { useState } from "react";
import SocialTab from "../analytics/social/SocialTab";
import FundamentalsTab from "../analytics/fundamentals/FundamentalsTab";
import TechnicalsTab from "../analytics/technicals/TechnicalsTab";
import LexiChat from "../analytics/chat/LexiChat";
import { ActiveTab } from "../../types/enums";
import { useTranslation } from "react-i18next";
import TickerInput from "../analytics/TickerInput";

const AnalyticsPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Social);

  const handleSetActiveTab = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full pt-2 flex flex-col h-screen">
      {" "}
      {/* Set flex and h-screen */}
      <TickerInput />
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
        <button
          className={`px-4 py-2 hover:bg-gray-100 rounded-t-lg focus:outline-none ${
            activeTab === ActiveTab.LexiChat
              ? "bg-white text-gray-700"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleSetActiveTab(ActiveTab.LexiChat)}
        >
          {t("analytics_page.tabs.lexi_chat")}
        </button>
      </div>
      {/* Ensure that the content area grows but the input remains at the bottom */}
      <div className="flex-grow bg-white overflow-auto">
        {" "}
        {/* Add flex-grow here */}
        {activeTab === ActiveTab.Social && <SocialTab />}
        {activeTab === ActiveTab.Fundamentals && <FundamentalsTab />}
        {activeTab === ActiveTab.Technicals && <TechnicalsTab />}
        {activeTab === ActiveTab.LexiChat && <LexiChat />}
      </div>
    </div>
  );
};

export default AnalyticsPage;
