import { useState, useEffect } from "react";
import { NewsArticle } from "../../../types/interfaces";
import { fetchNews } from "../../../utilities/api";
import { useTicker } from "../../../hooks/useTicker";

const daysAgo = (publishedAt: string | number | Date): string => {
  const today = new Date();
  const publishedDate = new Date(publishedAt);
  const timeDiff = today.getTime() - publishedDate.getTime();
  const daysDifference = Math.floor(timeDiff / (1000 * 3600 * 24));

  if (daysDifference === 0) {
    return "Today";
  } else if (daysDifference === 1) {
    return "1 day ago";
  } else {
    return `${daysDifference} days ago`;
  }
};

const NewsArticles: React.FC = () => {
  const { ticker } = useTicker();

  const [news, setNews] = useState<{
    symbol: string;
    articles: NewsArticle[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const cachedNews = localStorage.getItem(`news_${ticker}`);
        if (cachedNews) {
          setNews(JSON.parse(cachedNews));
          setLoading(false);
          return;
        }

        const result = await fetchNews(ticker);
        setNews(result);

        localStorage.setItem(`news_${ticker}`, JSON.stringify(result));
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
      {/* <h2 className="text-gray-900 text-2xl font-bold text-left pl-3">
        {t("analytics_page.socials.news")}
      </h2> */}
      <ul>
        {news?.articles?.map((article) => (
          <div
            key={article.url}
            className="bg-white shadow-sm p-4 mb-2 border hover:shadow-xl transition text-left"
          >
            <li>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-xl font-bold text-left"
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
