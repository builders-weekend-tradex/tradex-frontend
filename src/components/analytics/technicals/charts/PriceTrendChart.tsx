import ChartComponent from "./ChartComponent";
import { PriceTableProps } from "../../../../types/interfaces";

const PriceTrendChart: React.FC<PriceTableProps> = ({
  symbol,
}: {
  symbol: string;
}) => <ChartComponent symbol={symbol} chartName="price_trend" />;

export default PriceTrendChart;
