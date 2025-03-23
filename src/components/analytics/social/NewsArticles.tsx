import { useState, useEffect } from "react";
import { fetchNews } from "../../../utilities/api";
import { useTicker } from "../../../hooks/useTicker";
import { useTranslation } from "react-i18next";

const daysAgo = (
  publishedAt: string | number | Date,
  t: (key: string) => string
): string => {
  const today = new Date();
  const publishedDate = new Date(publishedAt);
  const timeDiff = today.getTime() - publishedDate.getTime();
  const daysDifference = Math.floor(timeDiff / (1000 * 3600 * 24));

  if (daysDifference === 0) return t("analytics_page.socials.news.today");
  if (daysDifference === 1) return t("analytics_page.socials.news.yesterday");
  return `${daysDifference} ${t("analytics_page.socials.news.days_ago")}`;
};

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
  const { t } = useTranslation();

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const cachedNews = sessionStorage.getItem(`news_${ticker}`);
        if (cachedNews) {
          const parsedNews = JSON.parse(cachedNews);
          if (Array.isArray(parsedNews)) {
            setNews(parsedNews);
          } else if (
            parsedNews?.articles &&
            Array.isArray(parsedNews.articles)
          ) {
            setNews(parsedNews.articles);
          }
          setLoading(false);
          return;
        }

        const result = await fetchNews(ticker);

        // Check if the result has articles and if it's an array
        if (result && Array.isArray(result.articles)) {
          setNews(result.articles);
          sessionStorage.setItem(
            `news_${ticker}`,
            JSON.stringify(result.articles)
          );
        } else {
          setNews([]); // Set to an empty array if data is invalid
          setError("No news articles available.");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [ticker]);

  if (loading) return <p>{t("analytics_page.socials.news.loading")}</p>;
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
                {daysAgo(article.publishedAt, t)}
              </p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NewsArticles;
