import AveragesChart from "./AveragesChart";
import BuySellChart from "./BuySellChart";
import PriceTable from "./PriceTable";

const TechnicalsTab: React.FC = () => {
  return (
    <div>
      <h2>Technicals Tab</h2>
      <AveragesChart />
      <BuySellChart />
      <PriceTable />
    </div>
  );
};

export default TechnicalsTab;
