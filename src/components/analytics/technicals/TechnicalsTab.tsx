import ChartComponent from "./charts/ChartComponent";
import TechnicalAnalysis from "./TechnicalAnalysis";
import { useTranslation } from "react-i18next";

const chartConfigs = [
  { title: "Price Trend", name: "price_trend" },
  { title: "Volume", name: "on_balance_volume_chart" },
  { title: "MACD", name: "macd" },
  { title: "RSI", name: "rsi" },
  { title: "Bollinger Bands", name: "bollinger_bands_plot" },
  { title: "Stochastic Oscillator", name: "stochastic_oscillator_plot" },
  { title: "Williams", name: "williams_r_plot" },
  { title: "ADX", name: "adx_plot" },
  { title: "CMF", name: "cmf", span: 2 },
];

import { useTicker } from "../../../hooks/useTicker"; 

const TechnicalsTab: React.FC = () => {
  const { t } = useTranslation();
  const { ticker } = useTicker();

  return (
    <div className="min-h-full h-full w-full relative">
      <div className="grid lg:grid-cols-1">
        <div className="bg-white p-4 shadow-sm space-y-4 xl:col-span-2">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl p-6">
            {t("analytics_page.technicals.technical_analysis")}
          </h2>
        </div>

        <div className="bg-white p-4 shadow-sm space-y-4 mt-4">
          <TechnicalAnalysis />
        </div>
      </div>

      <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow-sm space-y-4 xl:col-span-2 mt-4">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl p-6">
            {t("analytics_page.technicals.technical_indicators")}
          </h2>
        </div>

        {chartConfigs.map(({ title, name, span }) => (
          <div
            key={name}
            className={`bg-white p-6 shadow-sm space-y-4 place-items-center ${
              span === 2 ? "xl:col-span-2" : ""
            }`}
          >
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              {title}
            </h2>
            <ChartComponent chartName={name} ticker={ticker} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalsTab;
