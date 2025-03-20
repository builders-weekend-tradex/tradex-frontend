import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";

const MACDChart: React.FC = () => {
  const { ticker } = useTicker();
  return <ChartComponent ticker={ticker} chartName="macd" />;
};

export default MACDChart;
