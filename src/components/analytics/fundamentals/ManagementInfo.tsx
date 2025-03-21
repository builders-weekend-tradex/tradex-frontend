import { useTranslation } from "react-i18next";

const ManagementInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* This is intended as a Heading for the chart that will be shown underneath */}
      <h2 className="text-gray-900 text-2xl font-bold text-left pl-3">
        {t("analytics_page.fundamentals.management_info")}
      </h2>
    </div>
  );
};

export default ManagementInfo;
