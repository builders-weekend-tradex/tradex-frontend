import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";
import { StochasticOscillatorChartProps } from "../../../../types/interfaces";

const StochasticOscillatorChart: React.FC<StochasticOscillatorChartProps> = ({
  shouldFetch,
}) => {
  const { ticker } = useTicker();
  return (
    <ChartComponent
      ticker={ticker}
      chartName="stochastic_oscillator_plot"
      shouldFetch={shouldFetch}
    />
  );
};
export default StochasticOscillatorChart;
