import SocialTab from "../analytics/social/SocialTab";
import FundamentalsTab from "../analytics/fundamentals/FundamentalsTab";

const AnalyticsPage: React.FC = () => {
  return (
    <div>
      <h1>Analytics Page</h1>
      <SocialTab />
      <FundamentalsTab />
    </div>
  );
};

export default AnalyticsPage;
