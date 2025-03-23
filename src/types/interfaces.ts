export interface NewsArticle {
  url: string;
  title: string;
  publishedAt: string;
}

export interface ChartComponentProps {
  ticker: string;
  chartName: string;
}

export interface TickerContextType {
  ticker: string;
  setTicker: (newTicker: string) => void;
}
