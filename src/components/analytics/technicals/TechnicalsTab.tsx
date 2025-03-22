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

const TechnicalsTab: React.FC = () => {
  return (
    <div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg text-gray-800 font-semibold">Price Trend</h2>
        <PriceTrendChart />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg text-gray-800 font-semibold">Volume</h2>
        <VolumeChart />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg text-gray-800 font-semibold">MACD</h2>

        <MACDChart />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg text-gray-800 font-semibold">RSI</h2>

        <RSIChart />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg text-gray-800 font-semibold">Bollinger Bands</h2>

        <BollingerBandsChart />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg text-gray-800 font-semibold">
          Stochastic Oscillator
        </h2>

        <StochasticOscillatorChart />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg text-gray-800 font-semibold">Williams</h2>

        <WilliamsChart />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg text-gray-800 font-semibold">ADX</h2>

        <ADXChart />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg text-gray-800 font-semibold">CMF</h2>

        <CMFChart />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg text-gray-800 font-semibold">
          Technical Analysis
        </h2>
        <TechnicalAnalysis />
      </div>
    </div>
  );
};

export default TechnicalsTab;
