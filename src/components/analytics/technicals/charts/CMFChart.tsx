import ChartComponent from "./ChartComponent";
import { CMFChartProps } from "../../../../types/interfaces";

const CMFChart: React.FC<CMFChartProps> = ({ symbol }: { symbol: string }) => (
  <ChartComponent symbol={symbol} chartName="cmf" />
);

export default CMFChart;
