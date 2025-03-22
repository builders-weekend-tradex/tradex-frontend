import { useEffect, useState } from "react";
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
// import AllCharts from "./charts/AllCharts";

const TechnicalsTab: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-full h-full w-full relative">
      {isLoading && (
        <div className="min-h-full h-full w-full inset-0 flex justify-center items-center bg-white z-50">
          <img
            src={TradexLogo}
            alt="Tradex Logo"
            className="w-64 h-64 animate-pulse"
          />
        </div>
      )}

      {!isLoading && (
        <>
          <div className="grid grid-cols-1">
            <div className="bg-white p-4 shadow-sm space-y-4 col-span-2">
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl p-6">
                Technical Analysis
              </h2>
            </div>

            <div className="bg-white p-4 space-y-4 mt-4 w-full">
              <TechnicalAnalysis />
            </div>
          </div>
          {/* <div>
            <AllCharts />
          </div> */}

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow-sm space-y-4 col-span-2 mt-4">
              <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl p-6">
                Technical Indicators
              </h2>
            </div>
            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center ">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Price Trend
              </h2>
              <PriceTrendChart />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center ">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Volume
              </h2>
              <VolumeChart />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center ">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                MACD
              </h2>
              <MACDChart />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center ">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                RSI
              </h2>
              <RSIChart />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center ">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Bollinger Bands
              </h2>
              <BollingerBandsChart />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center ">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Stochastic Oscillator
              </h2>
              <StochasticOscillatorChart />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center ">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Williams
              </h2>
              <WilliamsChart />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 place-items-center ">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                ADX
              </h2>
              <ADXChart />
            </div>

            <div className="bg-white p-6 shadow-sm space-y-4 col-span-2 place-items-center mb-4">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                CMF
              </h2>
              <CMFChart />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TechnicalsTab;
