import ChartComponent from "./ChartComponent";
import { useTicker } from "../../../../hooks/useTicker";
import { CMFChartProps } from "../../../../types/interfaces";

const CMFChart: React.FC<CMFChartProps> = ({ shouldFetch }) => {
  const { ticker } = useTicker();
  return (
    <ChartComponent ticker={ticker} chartName="cmf" shouldFetch={shouldFetch} />
  );
};

export default CMFChart;
