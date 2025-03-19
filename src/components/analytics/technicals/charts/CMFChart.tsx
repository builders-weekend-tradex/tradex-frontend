import ChartComponent from "./ChartComponent";
import { CMFChartProps } from "../../../../types/interfaces";

const CMFChart: React.FC<CMFChartProps> = ({ symbol }) => (
  <ChartComponent symbol={symbol} chartName="cmf" />
);

export default CMFChart;
