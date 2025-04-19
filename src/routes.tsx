import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./components/pages/LandingPage";
import AnalyticsPage from "./components/pages/AnalyticsPage";
import { TickerProvider } from "./context/TickerProvider";
import { ChartCacheProvider } from "./context/ChartCacheContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <TickerProvider>
        <App />
      </TickerProvider>
    ),
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "analytics",
        element: (
          <ChartCacheProvider>
            <AnalyticsPage />
          </ChartCacheProvider>
        ),
      },
    ],
  },
]);
