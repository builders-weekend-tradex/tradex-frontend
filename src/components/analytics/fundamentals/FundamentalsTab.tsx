import AboutCompany from "./AboutCompany";
import FinancialSheet from "./FinancialSheet";
import ManagementInfo from "./ManagementInfo";

const FundamentalsTab: React.FC = () => {
  return (
    <div className="bg-white bg-white h-[80vh] overflow-y-auto">
      <h2>Fundamentals</h2>
      <AboutCompany />
      <FinancialSheet />
      <ManagementInfo />
    </div>
  );
};

export default FundamentalsTab;
