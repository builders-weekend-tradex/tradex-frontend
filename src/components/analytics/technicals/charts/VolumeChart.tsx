import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";

const VolumeChart: React.FC = () => {
  const { ticker } = useTicker();
  return <ChartComponent ticker={ticker} chartName="on_balance_volume_chart" />;
};

export default VolumeChart;
