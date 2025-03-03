import SocialTab from "../analytics/social/SocialTab";
import FundamentalsTab from "../analytics/fundamentals/FundamentalsTab";
import TechnicalsTab from "../analytics/technicals/TechnicalsTab";

const AnalyticsPage: React.FC = () => {
  return (
    <div className="w-full">
      <h1>Analytics Page</h1>
      <div className="space-y-8">
        <SocialTab />
        <FundamentalsTab />
        <TechnicalsTab />
      </div>
    </div>
  );
};

export default AnalyticsPage;
