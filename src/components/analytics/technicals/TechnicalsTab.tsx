import AveragesChart from "./AveragesChart";
import BuySellChart from "./BuySellChart";
import PriceTable from "./PriceTable";
import TechnicalAnalysis from "./TechnicalAnalysis";

const TechnicalsTab: React.FC = () => {
  return (
    <div>
      <AveragesChart />
      <BuySellChart />
      <PriceTable />
      <TechnicalAnalysis />
    </div>
  );
};

export default TechnicalsTab;
