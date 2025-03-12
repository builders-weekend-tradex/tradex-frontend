import { useTranslation } from "react-i18next";

const NewsArticles: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="md:w-2/3 sticky top-4 self-start">
      {/* This is intended as a Heading for the chart that will be shown underneath */}
      <h2 className="text-gray-900 text-2xl font-bold text-left pl-3">
        {t("analytics_page.socials.news")}
      </h2>
    </div>
  );
};

export default NewsArticles;
