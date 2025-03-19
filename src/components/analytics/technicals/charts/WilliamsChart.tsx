import ChartComponent from "./ChartComponent";
import { WilliamsChartProps } from "../../../../types/interfaces";

const WilliamsChart: React.FC<WilliamsChartProps> = ({ symbol }) => (
  <ChartComponent symbol={symbol} chartName="williams_r_plot" />
);

export default WilliamsChart;
