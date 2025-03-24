import FundamentalAnalysis from "./FundamentalAnalysis";
import { useTranslation } from "react-i18next";

const TechnicalsTab: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-full h-full w-full relative">
      <div className="grid lg:grid-cols-1 ">
        <div className="bg-white p-4 shadow-sm space-y-4 xl:col-span-2">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl p-6 text-center">
            {t("analytics_page.fundamentals.fundamental_analysis")}
          </h2>
        </div>

        <div className="bg-white p-4 shadow-sm space-y-4 mt-4">
          <FundamentalAnalysis />
        </div>
      </div>
    </div>
  );
};

export default TechnicalsTab;
