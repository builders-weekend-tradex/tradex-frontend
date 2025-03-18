import ChartComponent from "./ChartComponent";
import { BollingerBandsChartProps } from "../../../../types/interfaces";

const BollingerBandsChart: React.FC<BollingerBandsChartProps> = ({
  symbol,
}: {
  symbol: string;
}) => <ChartComponent symbol={symbol} chartName="bollinger_bands_plot" />;

export default BollingerBandsChart;
