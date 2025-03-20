import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";
import { BollingerBandsChartProps } from "../../../../types/interfaces";

const BollingerBandsChart: React.FC<BollingerBandsChartProps> = ({
  shouldFetch,
}) => {
  const { ticker } = useTicker();
  return (
    <ChartComponent
      ticker={ticker}
      chartName="bollinger_bands_plot"
      shouldFetch={shouldFetch}
    />
  );
};
export default BollingerBandsChart;
