import ChartComponent from "./ChartComponent";
import { ADXChartProps } from "../../../../types/interfaces";

const ADXChart: React.FC<ADXChartProps> = ({ symbol }: { symbol: string }) => (
  <ChartComponent symbol={symbol} chartName="adx_plot" />
);

export default ADXChart;
