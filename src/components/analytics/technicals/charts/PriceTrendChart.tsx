import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";
import { PriceTrendChartProps } from "../../../../types/interfaces";

const PriceTrendChart: React.FC<PriceTrendChartProps> = ({ shouldFetch }) => {
  const { ticker } = useTicker();
  return (
    <ChartComponent
      ticker={ticker}
      chartName="price_trend"
      shouldFetch={shouldFetch}
    />
  );
};

export default PriceTrendChart;
