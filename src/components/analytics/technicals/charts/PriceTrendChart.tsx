import ChartComponent from "./ChartComponent";
import { PriceTableProps } from "../../../../types/interfaces";

const PriceTrendChart: React.FC<PriceTableProps> = ({ symbol }) => (
  <ChartComponent symbol={symbol} chartName="price_trend" />
);

export default PriceTrendChart;
