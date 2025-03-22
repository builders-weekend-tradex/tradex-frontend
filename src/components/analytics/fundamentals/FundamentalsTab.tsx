import AboutCompany from "./AboutCompany";
import FinancialSheet from "./FinancialSheet";
import ManagementInfo from "./ManagementInfo";

const FundamentalsTab: React.FC = () => {
  return (
    <div>
      <AboutCompany />
      <FinancialSheet />
      <ManagementInfo />
    </div>
  );
};

export default FundamentalsTab;
