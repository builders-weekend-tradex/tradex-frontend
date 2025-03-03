import AboutCompany from "./AboutCompany";
import FinancialSheet from "./FinancialSheet";
import ManagementInfo from "./ManagementInfo";

const FundamentalsTab: React.FC = () => {
  return (
    <div>
      <h2>Social Tab</h2>
      <AboutCompany />
      <FinancialSheet />
      <ManagementInfo />
    </div>
  );
};

export default FundamentalsTab;
