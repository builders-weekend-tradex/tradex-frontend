import { useState, useEffect } from "react";
import MACDChart from "./charts/MACDChart";
import PriceTrendChart from "./charts/PriceTrendChart";
import VolumeChart from "./charts/VolumeChart";
import RSIChart from "./charts/RSIChart";
import BollingerBandsChart from "./charts/BollingerBandsChart";
import StochasticOscillatorChart from "./charts/StochasticOscillatorChart";
import WilliamsChart from "./charts/WilliamsChart";
import ADXChart from "./charts/ADXChart";
import CMFChart from "./charts/CMFChart";
import TechnicalAnalysis from "./TechnicalAnalysis";
import TradexLogo from "../../../assets/tradex-logo.svg";

const TechnicalsTab: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [shouldFetch, setShouldFetch] = useState(false);

  const triggerFetch = () => {
    setShouldFetch(true); // Immediately trigger fetching
  };

  useEffect(() => {
    triggerFetch(); // Start fetching the data immediately when the component mounts

    setTimeout(() => {
      setIsLoading(false); // Stop loading animation after 10 seconds
    }, 10);
  }, []); // Only runs once on mount

  return (
    <div className="min-h-full h-full w-full">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-full h-full">
          <img
            src={TradexLogo}
            alt="Tradex Logo"
            className="w-32 h-32 animate-fadeInScale"
          />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 ">
            <div className="bg-white p-4 shadow-sm space-y-4 col-span-2">
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl p-6">
                Technical Analysis
              </h2>
            </div>
            {/* <div className="bg-white p-4 shadow-sm space-y-4 gap-6 w-full"> */}
            <div className="bg-white p-4 space-y-4 mt-4 w-full">
              <TechnicalAnalysis />
            </div>
            {/* </div> */}
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-sm space-y-4 col-span-2 mt-4">
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl p-6">
                Technical Indicators
              </h2>
            </div>
            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Price Trend
              </h2>
              <PriceTrendChart shouldFetch={shouldFetch} />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Volume
              </h2>
              <VolumeChart shouldFetch={shouldFetch} />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                MACD
              </h2>
              <MACDChart shouldFetch={shouldFetch} />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                RSI
              </h2>
              <RSIChart shouldFetch={shouldFetch} />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Bollinger Bands
              </h2>
              <BollingerBandsChart shouldFetch={shouldFetch} />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Stochastic Oscillator
              </h2>
              <StochasticOscillatorChart shouldFetch={shouldFetch} />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Williams
              </h2>
              <WilliamsChart shouldFetch={shouldFetch} />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                ADX
              </h2>
              <ADXChart shouldFetch={shouldFetch} />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 col-span-2 place-items-center mb-4">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                CMF
              </h2>
              <CMFChart shouldFetch={shouldFetch} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TechnicalsTab;
