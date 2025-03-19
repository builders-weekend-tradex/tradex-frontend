import { useState, useEffect } from "react";
import { NewsArticle } from "../../../types/interfaces";
import { fetchNews } from "../../../utilities/api";
import { useTranslation } from "react-i18next";

const NewsArticles: React.FC = () => {
  const { t } = useTranslation();

  const [news, setNews] = useState<{
    symbol: string;
    articles: NewsArticle[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const result = await fetchNews("Google"); // Replace with dynamic company name
        setNews(result);
      } catch {
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="">
      <h2 className="text-gray-900 text-2xl font-bold text-left pl-3">
        {t("analytics_page.socials.news")}
      </h2>
      <ul>
        {news?.articles?.map((article, index) => (
          <div
            key={article.url}
            className="bg-white shadow-lg rounded-2xl p-4 border hover:shadow-xl transition"
          >
            <li key={index}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-xl font-bold text-left"
              >
                {article.title}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NewsArticles;
