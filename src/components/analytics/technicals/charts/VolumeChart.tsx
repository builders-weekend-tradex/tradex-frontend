import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";
import { VolumeChartProps } from "../../../../types/interfaces";

const VolumeChart: React.FC<VolumeChartProps> = ({ shouldFetch }) => {
  const { ticker } = useTicker();
  return (
    <ChartComponent
      ticker={ticker}
      chartName="on_balance_volume_chart"
      shouldFetch={shouldFetch}
    />
  );
};

export default VolumeChart;
