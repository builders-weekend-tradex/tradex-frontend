import { useTicker } from "../../hooks/useTicker";
import { useTranslation } from "react-i18next";
import { ActiveTab } from "../../types/enums";
import { ArrowRight } from "lucide-react";
import TickerInputBackground from "../../../src/assets/image1.jpeg";

interface TickerInputProps {
  setActiveTab: (tab: ActiveTab) => void;
}

const TickerInput: React.FC<TickerInputProps> = ({ setActiveTab }) => {
  const { ticker, setTicker } = useTicker();
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTicker(event.target.value.toUpperCase());
  };

  const handleSearch = () => {
    setActiveTab(ActiveTab.Technicals); // Switch to Technicals after animation
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="hidden lg:block lg:absolute lg:inset-0">
        <img
          className="h-full w-full object-cover"
          src={TickerInputBackground}
          alt="Trading dashboard"
        />
        <div className="absolute inset-0 bg-black opacity-50 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
        <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              {t("analytics_page.ticker_input.label")}:
            </h1>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="sm:flex">
                <input
                  type="email"
                  required
                  placeholder={t("analytics_page.ticker_input.placeholder")}
                  className="w-full bg-gray-100 px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md text-black"
                  value={ticker}
                  onChange={handleChange}
                />
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-6"
                  >
                    {t("analytics_page.ticker_input.button")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerInput;
