import { useState, useEffect } from "react";
// import { NewsArticle } from "../../../types/interfaces";
import { fetchNews } from "../../../utilities/api";
import { useTicker } from "../../../hooks/useTicker";

const daysAgo = (publishedAt: string | number | Date): string => {
  const today = new Date();
  const publishedDate = new Date(publishedAt);
  const timeDiff = today.getTime() - publishedDate.getTime();
  const daysDifference = Math.floor(timeDiff / (1000 * 3600 * 24));

  if (daysDifference === 0) return "Today";
  if (daysDifference === 1) return "1 day ago";
  return `${daysDifference} days ago`;
};

// Ensure publishedAt is part of the NewsArticle interface
export interface NewsArticle {
  title: string;
  publishedAt: string;
  url: string;
}

const NewsArticles: React.FC = () => {
  const { ticker } = useTicker();
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const cachedNews = sessionStorage.getItem(`news_${ticker}`);
        if (cachedNews) {
          setNews(JSON.parse(cachedNews));
          setLoading(false);
          return;
        }

        const result = await fetchNews(ticker);
        console.log("API Response:", result);

        setNews(result.articles); // Accessing the articles from the response
        sessionStorage.setItem(
          `news_${ticker}`,
          JSON.stringify(result.articles)
        );
      } catch {
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [ticker]);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul>
        {news.map((article) => (
          <div
            key={article.url}
            className="bg-white shadow-sm p-4 mb-2 border hover:shadow-xl transition text-left"
          >
            <li>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-xl font-bold"
              >
                {article.title}
              </a>
              <p className="text-gray-400 text-sm mt-2">
                {daysAgo(article.publishedAt)}
              </p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NewsArticles;
