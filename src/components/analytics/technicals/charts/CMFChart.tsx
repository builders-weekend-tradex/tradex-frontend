import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";

const CMFChart: React.FC = () => {
  const { ticker } = useTicker();
  return <ChartComponent ticker={ticker} chartName="cmf" />;
};

export default CMFChart;
