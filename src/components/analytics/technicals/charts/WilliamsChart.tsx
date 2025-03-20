import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";
import { WilliamsChartProps } from "../../../../types/interfaces";

const WilliamsChart: React.FC<WilliamsChartProps> = ({ shouldFetch }) => {
  const { ticker } = useTicker();
  return (
    <ChartComponent
      ticker={ticker}
      chartName="williams_r_plot"
      shouldFetch={shouldFetch}
    />
  );
};

export default WilliamsChart;
