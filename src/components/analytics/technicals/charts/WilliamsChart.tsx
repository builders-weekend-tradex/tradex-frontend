import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";

const WilliamsChart: React.FC = () => {
  const { ticker } = useTicker();
  return <ChartComponent ticker={ticker} chartName="williams_r_plot" />;
};

export default WilliamsChart;
