import SentimentScore from "./SentimentScore";
import NewsArticles from "./NewsArticles";

const SocialTab: React.FC = () => {
  return (
    <div className="bg-white">
      <h2>Social Tab</h2>
      <SentimentScore />
      <NewsArticles />
    </div>
  );
};

export default SocialTab;
