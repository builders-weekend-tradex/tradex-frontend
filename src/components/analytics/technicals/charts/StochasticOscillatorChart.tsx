import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";

const StochasticOscillatorChart: React.FC = () => {
  const { ticker } = useTicker();
  return (
    <ChartComponent ticker={ticker} chartName="stochastic_oscillator_plot" />
  );
};
export default StochasticOscillatorChart;
