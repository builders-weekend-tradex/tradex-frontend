import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";

const PriceTrendChart: React.FC = () => {
  const { ticker } = useTicker();
  return <ChartComponent ticker={ticker} chartName="price_trend" />;
};

export default PriceTrendChart;
