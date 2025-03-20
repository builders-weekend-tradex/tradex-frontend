import { useTicker } from "../../hooks/useTicker";
import { useTranslation } from "react-i18next";

import { ActiveTab } from "../../types/enums";

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
    <div className="flex justify-center items-center h-full">
      <div className="p-8 bg-white w-full flex flex-col items-center space-y-6 w-full max-w-md">
        <label
          htmlFor="ticker"
          className="text-2xl text-gray-800 font-semibold"
        >
          {t("analytics_page.ticker_input.label")}:
        </label>
        <input
          type="text"
          placeholder={t("analytics_page.ticker_input.placeholder")}
          value={ticker}
          onChange={handleChange}
          className="w-full p-4 border border-white/40 rounded-lg bg-white text-black placeholder-white/50 focus:border-blue-400 focus:ring focus:ring-blue-500"
        />
        <button
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition transform hover:scale-105 shadow-md"
          type="button"
          onClick={handleSearch}
        >
          {t("analytics_page.ticker_input.button")}
        </button>
      </div>
    </div>
  );
};

export default TickerInput;
