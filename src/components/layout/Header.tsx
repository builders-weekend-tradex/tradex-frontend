import LanguageSelector from "../language/LanguageSelector";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-16 w-full">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <span className="ml-2 text-2xl font-bold text-blue-800">
                  TradEx
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#features"
                className="border-transparent text-gray-600 hover:border-blue-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                {t("header.features")}
              </a>
              <a
                href="#pricing"
                className="border-transparent text-gray-600 hover:border-blue-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                {t("header.pricing")}
              </a>

              <Link
                to="/analytics"
                className="border-transparent text-gray-600 hover:border-blue-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Analytics
              </Link>

              <div className="flex items-center gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  {t("header.sign-in")}
                </button>
                <LanguageSelector />
              </div>
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
          >
            {t("header.features")}
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
          >
            {t("header.pricing")}
          </a>
          <Link
            to="/analytics"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
          >
            Analytics
          </Link>
          <button className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">
            {t("header.sign-in")}
          </button>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Header;
