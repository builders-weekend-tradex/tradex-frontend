export interface NewsArticle {
  url: string;
  title: string;
}

export interface ChartComponentProps {
  ticker: string;
  chartName: string;
  shouldFetch: (() => void) | boolean;
}

export interface ADXChartProps {
  shouldFetch: boolean;
}

export interface BollingerBandsChartProps {
  shouldFetch: boolean;
}

export interface CMFChartProps {
  shouldFetch: boolean;
}

export interface MACDChartProps {
  shouldFetch: boolean;
}

export interface PriceTrendChartProps {
  shouldFetch: boolean;
}

export interface RSIChartProps {
  shouldFetch: boolean;
}

export interface StochasticOscillatorChartProps {
  shouldFetch: boolean;
}

export interface VolumeChartProps {
  shouldFetch: boolean;
}

export interface WilliamsChartProps {
  shouldFetch: boolean;
}

export interface TickerContextType {
  ticker: string;
  setTicker: (newTicker: string) => void;
}
