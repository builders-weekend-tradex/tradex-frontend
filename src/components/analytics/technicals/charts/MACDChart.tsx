import ChartComponent from "./ChartComponent";
import { MACDChartProps } from "../../../../types/interfaces";

const MACDChart: React.FC<MACDChartProps> = ({
  symbol,
}: {
  symbol: string;
}) => <ChartComponent symbol={symbol} chartName="macd" />;

export default MACDChart;
