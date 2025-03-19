import ChartComponent from "./ChartComponent";
import { MACDChartProps } from "../../../../types/interfaces";

const MACDChart: React.FC<MACDChartProps> = ({ symbol }) => (
  <ChartComponent symbol={symbol} chartName="macd" />
);

export default MACDChart;
