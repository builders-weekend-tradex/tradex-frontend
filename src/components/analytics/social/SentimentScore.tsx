import { useTranslation } from "react-i18next";

const SentimentScore: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="md:w-1/3 sticky top-4 self-start">
      <h2 className="text-gray-900 text-2xl font-bold text-left pl-3">
        {t("analytics_page.socials.sentiment_score")}
      </h2>
    </div>
  );
};

export default SentimentScore;
