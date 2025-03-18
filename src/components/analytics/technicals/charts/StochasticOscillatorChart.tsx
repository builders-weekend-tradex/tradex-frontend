import ChartComponent from "./ChartComponent";
import { StochasticOscillatorChartProps } from "../../../../types/interfaces";

const StochasticOscillatorChart: React.FC<StochasticOscillatorChartProps> = ({
  symbol,
}: {
  symbol: string;
}) => <ChartComponent symbol={symbol} chartName="stochastic_oscillator_plot" />;

export default StochasticOscillatorChart;
