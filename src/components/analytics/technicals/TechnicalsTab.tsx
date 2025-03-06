import AveragesChart from "./AveragesChart";
import BuySellChart from "./BuySellChart";
import PriceTable from "./PriceTable";

const TechnicalsTab: React.FC = () => {
  return (
    <div className="bg-white min-h-full">
      <h2>Technicals Tab</h2>
      <AveragesChart />
      <BuySellChart />
      <PriceTable />
    </div>
  );
};

export default TechnicalsTab;
