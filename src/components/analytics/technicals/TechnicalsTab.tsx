import AveragesChart from "./AveragesChart";
import BuySellChart from "./BuySellChart";
import PriceTable from "./PriceTable";
import TechnicalAnalysis from "./TechnicalAnalysis";

const TechnicalsTab: React.FC = () => {
  return (
    <div>
      <AveragesChart />
      <BuySellChart />
      <div className="bg-white min-h-full">
        <h2 className="text-lg font-semibold">Technical Analysis</h2>

        {/* Render the PriceTable component for GOOG */}
        <PriceTable symbol="GOOG" />
      </div>
      <TechnicalAnalysis />
    </div>
  );
};

export default TechnicalsTab;
