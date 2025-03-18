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
        <h2 className="text-lg font-semibold">Technical Analysis</h2>

        {/* Render the PriceTable component for GOOG */}
        <PriceTrendChart symbol="GOOG" />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg font-semibold">Technical Analysis</h2>

        {/* Render the PriceTable component for GOOG */}
        <VolumeChart symbol="GOOG" />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg font-semibold">Technical Analysis</h2>

        {/* Render the PriceTable component for GOOG */}
        <MACDChart symbol="GOOG" />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg font-semibold">Technical Analysis</h2>

        {/* Render the PriceTable component for GOOG */}
        <RSIChart symbol="GOOG" />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg font-semibold">Technical Analysis</h2>

        {/* Render the PriceTable component for GOOG */}
        <BollingerBandsChart symbol="GOOG" />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg font-semibold">Technical Analysis</h2>

        {/* Render the PriceTable component for GOOG */}
        <StochasticOscillatorChart symbol="GOOG" />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg font-semibold">Technical Analysis</h2>

        {/* Render the PriceTable component for GOOG */}
        <WilliamsChart symbol="GOOG" />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg font-semibold">Technical Analysis</h2>

        {/* Render the PriceTable component for GOOG */}
        <ADXChart symbol="GOOG" />
      </div>
      <div className="bg-white min-h-full">
        <h2 className="text-lg font-semibold">Technical Analysis</h2>

        {/* Render the PriceTable component for GOOG */}
        <CMFChart symbol="GOOG" />
      </div>
      <TechnicalAnalysis />
    </div>
  );
};

export default TechnicalsTab;
