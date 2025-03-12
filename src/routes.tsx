import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./components/pages/LandingPage";
import AnalyticsPage from "./components/pages/AnalyticsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> }, // Default route
      { path: "analytics", element: <AnalyticsPage /> },
    ],
  },
]);
