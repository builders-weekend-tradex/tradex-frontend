import AboutCompany from "./AboutCompany";
import FinancialSheet from "./FinancialSheet";
import ManagementInfo from "./ManagementInfo";

const FundamentalsTab: React.FC = () => {
  return (
    <div className="bg-white">
      <h2>Social Tab</h2>
      <AboutCompany />
      <FinancialSheet />
      <ManagementInfo />
    </div>
  );
};

export default FundamentalsTab;
