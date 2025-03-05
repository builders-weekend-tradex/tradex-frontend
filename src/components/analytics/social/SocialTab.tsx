import SentimentScore from "./SentimentScore";
import NewsArticles from "./NewsArticles";

const SocialTab: React.FC = () => {
  return (
    <div className="bg-white flex-1 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6">
        <NewsArticles />
        <SentimentScore />
      </div>
    </div>
  );
};

export default SocialTab;
