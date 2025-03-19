import ChartComponent from "./ChartComponent";
import { VolumeChartProps } from "../../../../types/interfaces";

const VolumeChart: React.FC<VolumeChartProps> = ({ symbol }) => (
  <ChartComponent symbol={symbol} chartName="on_balance_volume_chart" />
);

export default VolumeChart;
