import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";

const ADXChart: React.FC = () => {
  const { ticker } = useTicker();
  return <ChartComponent ticker={ticker} chartName="adx_plot" />;
};

export default ADXChart;
