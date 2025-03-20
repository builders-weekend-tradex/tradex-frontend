import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";
import { ADXChartProps } from "../../../../types/interfaces";

const ADXChart: React.FC<ADXChartProps> = ({ shouldFetch }) => {
  const { ticker } = useTicker();
  return (
    <ChartComponent
      ticker={ticker}
      chartName="adx_plot"
      shouldFetch={shouldFetch}
    />
  );
};

export default ADXChart;
