import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";

const BacktestingChart: React.FC = () => {
  const { ticker } = useTicker();
  return <ChartComponent ticker={ticker} chartName="backtesting" />;
};
export default BacktestingChart;
