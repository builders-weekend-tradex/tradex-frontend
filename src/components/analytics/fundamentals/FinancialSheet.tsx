import { useTranslation } from "react-i18next";

const FinancialSheet: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="text-gray-900 text-2xl font-bold text-left pl-3">
        {t("analytics_page.fundamentals.financial_sheet")}
      </h2>
    </div>
  );
};

export default FinancialSheet;
