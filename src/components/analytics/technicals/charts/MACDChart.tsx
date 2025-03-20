import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";
import { MACDChartProps } from "../../../../types/interfaces";

const MACDChart: React.FC<MACDChartProps> = ({ triggerFetch }) => {
  const { ticker } = useTicker();
  return (
    <ChartComponent
      ticker={ticker}
      chartName="macd"
      triggerFetch={triggerFetch}
    />
  );
};

export default MACDChart;
