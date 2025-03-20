import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";

const RSIChart: React.FC = () => {
  const { ticker } = useTicker();
  return <ChartComponent ticker={ticker} chartName="rsi" />;
};

export default RSIChart;
