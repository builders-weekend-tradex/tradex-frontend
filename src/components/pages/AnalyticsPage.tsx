import { useState } from "react";
import SocialTab from "../analytics/social/SocialTab";
import TechnicalsTab from "../analytics/technicals/TechnicalsTab";
import LexiChat from "../analytics/chat/LexiChat";
import { ActiveTab } from "../../types/enums";
import { useTranslation } from "react-i18next";
import TickerInput from "../analytics/TickerInput";

const AnalyticsPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.TickerInput);

  const handleSetActiveTab = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="pt-2 flex flex-col h-screen">
      {/* Set flex and h-screen */}
      <div className="flex space-x-1 w-full">
        <button
          className={`flex-1 px-4 py-2 hover:bg-gray-900 rounded-lg focus:outline-none ${
            activeTab === ActiveTab.TickerInput
              ? "bg-gray-900 text-white text-base font-semibold tracking-wide uppercase"
              : "bg-gray-800 text-white text-base font-semibold tracking-wide uppercase"
          }`}
          onClick={() => handleSetActiveTab(ActiveTab.TickerInput)}
        >
          {t("analytics_page.tabs.ticker_input")}
        </button>
        <button
          className={`flex-1 px-4 py-2 hover:bg-gray-100 rounded-lg focus:outline-none ${
            activeTab === ActiveTab.Technicals
              ? "bg-white text-gray-700 text-base font-semibold tracking-wide uppercase"
              : "bg-gray-200 text-gray-700 text-base font-semibold tracking-wide uppercase"
          }`}
          onClick={() => handleSetActiveTab(ActiveTab.Technicals)}
        >
          {t("analytics_page.tabs.technicals")}
        </button>
        <button
          className={`flex-1 px-4 py-2 hover:bg-gray-100 rounded-lg focus:outline-none ${
            activeTab === ActiveTab.Social
              ? "bg-white text-gray-700 text-base font-semibold tracking-wide uppercase"
              : "bg-gray-200 text-gray-700 text-base font-semibold tracking-wide uppercase"
          }`}
          onClick={() => handleSetActiveTab(ActiveTab.Social)}
        >
          {t("analytics_page.tabs.social")}
        </button>
        <button
          className={`flex-1 px-4 py-2 hover:bg-gray-100 rounded-lg focus:outline-none ${
            activeTab === ActiveTab.LexiChat
              ? "bg-white text-base font-semibold tracking-wide uppercase text-gray-700"
              : "bg-gray-200 text-base font-semibold tracking-wide uppercase text-gray-700"
          }`}
          onClick={() => handleSetActiveTab(ActiveTab.LexiChat)}
        >
          {t("analytics_page.tabs.lexi_chat")}
        </button>
      </div>
      {/* Ensure that the content area grows but the input remains at the bottom */}
      <div className="flex-grow overflow-auto mt-2">
        {" "}
        {/* Add flex-grow here */}
        {activeTab === ActiveTab.TickerInput && (
          <TickerInput setActiveTab={setActiveTab} />
        )}
        {activeTab === ActiveTab.Technicals && <TechnicalsTab />}
        {activeTab === ActiveTab.Social && <SocialTab />}
        {activeTab === ActiveTab.LexiChat && <LexiChat />}
      </div>
    </div>
  );
};

export default AnalyticsPage;
