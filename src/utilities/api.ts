const API_BASE_URL = "http://127.0.0.1:8000";

// Fetch Technical Analysis Summary
export const fetchTechnicalAnalysis = async (symbol: string) => {
  const response = await fetch(
    `${API_BASE_URL}/analysis/tech/summary/?symbol=${symbol}`
  );
  if (!response.ok) throw new Error("Failed to fetch technical analysis");
  return await response.json();
};

// Fetch All Technical Charts
export const fetchAllCharts = async (symbol: string) => {
  const response = await fetch(
    `${API_BASE_URL}/analysis/tech/charts/all/?symbol=${symbol}`
  );
  if (!response.ok) throw new Error("Failed to fetch all technical charts");
  return await response.text(); // HTML content response
};

// Fetch Single Technical Chart
export const fetchSingleChart = async (chartName: string, symbol: string) => {
  const response = await fetch(
    `${API_BASE_URL}/analysis/tech/charts/${chartName}?symbol=${symbol}`
  );
  if (!response.ok) throw new Error("Chart not found");
  return await response.text(); // Assuming the response is HTML
};
// Fetch Social News

export const fetchNews = async (symbol: string) => {
  const response = await fetch(
    `${API_BASE_URL}/analysis/social/news/everything/?symbol=${symbol}`
  );
  if (!response.ok) throw new Error("Failed to fetch news");
  return await response.json();
};

// Chat with Lexi AI
export const chatWithLexi = async (message: string) => {
  const response = await fetch(`${API_BASE_URL}/analysis/lexi/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  if (!response.ok) throw new Error("Failed to chat with Lexi");
  return await response.json();
};
