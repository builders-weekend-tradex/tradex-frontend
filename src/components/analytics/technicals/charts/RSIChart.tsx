import ChartComponent from "./ChartComponent";
import { RSIChartProps } from "../../../../types/interfaces";

const RSIChart: React.FC<RSIChartProps> = ({ symbol }) => (
  <ChartComponent symbol={symbol} chartName="rsi" />
);

export default RSIChart;
