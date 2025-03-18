export interface NewsArticle {
  url: string;
  title: string;
}

export interface ADXChartProps {
  symbol: string;
}

export interface BollingerBandsChartProps {
  symbol: string;
}

export interface CMFChartProps {
  symbol: string;
}

export interface MACDChartProps {
  symbol: string;
}

export interface PriceTableProps {
  symbol: string;
}

export interface RSIChartProps {
  symbol: string;
}

export interface StochasticOscillatorChartProps {
  symbol: string;
}

export interface VolumeChartProps {
  symbol: string;
}

export interface WilliamsChartProps {
  symbol: string;
}

export interface ChartComponentProps {
  symbol: string;
  chartName: string;
}
