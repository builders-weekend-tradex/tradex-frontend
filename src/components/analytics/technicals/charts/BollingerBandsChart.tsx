import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";

const BollingerBandsChart: React.FC = () => {
  const { ticker } = useTicker();
  return <ChartComponent ticker={ticker} chartName="bollinger_bands_plot" />;
};
export default BollingerBandsChart;
