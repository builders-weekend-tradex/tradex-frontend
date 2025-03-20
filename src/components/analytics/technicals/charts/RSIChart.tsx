import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";
import { RSIChartProps } from "../../../../types/interfaces";

const RSIChart: React.FC<RSIChartProps> = ({ shouldFetch }) => {
  const { ticker } = useTicker();
  return (
    <ChartComponent ticker={ticker} chartName="rsi" shouldFetch={shouldFetch} />
  );
};

export default RSIChart;
