import MACDChart from "./MACDChart";
import PriceTrendChart from "./PriceTrendChart";
import TechnicalAnalysis from "./TechnicalAnalysis";
import VolumeChart from "./VolumeChart";
import RSIChart from "./RSIChart";
import BollingerBandsChart from "./BollingerBandsChart";
import StochasticOscillatorChart from "./StochasticOscillatorChart";
import WilliamsChart from "./WilliamsChart";
import ADXChart from "./ADXChart";
import CMFChart from "./CMFChart";

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
