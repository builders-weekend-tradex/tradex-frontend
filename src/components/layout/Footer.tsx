import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 w-full">
      <div className="mx-auto py-12 px-4 sm:px-6 lg:py-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-base text-gray-400 ml-8">
            {t("footer.copyright")}
          </p>
          <div className="space-x-4 mr-8">
            <a href="#" className="text-base text-gray-400 hover:text-white">
              {t("footer.links.privacy")}
            </a>
            <a href="#" className="text-base text-gray-400 hover:text-white">
              {t("footer.links.contact")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
