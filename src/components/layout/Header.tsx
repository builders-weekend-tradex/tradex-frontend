import { useState } from "react";
import LanguageSelector from "../language/LanguageSelector";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TradexLogo from "../../assets/tradex-logo-header.svg";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const { i18n } = useTranslation();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (location.pathname !== "/") {
      event.preventDefault();
      navigate("/");
    }
  };

  return (
    <nav className="relative bg-white shadow-sm w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex  h-16 w-full">
          <div className="flex items-center w-full">
            <div className="flex-shrink-0 items-center">
              <Link to="/">
                {/* <span className="ml-2 text-2xl font-bold text-blue-800">
                  TradEx
                </span> */}
                <img className="h-24 w-24" src={TradexLogo} alt="Tradex Logo" />
              </Link>
            </div>
            <div className="hidden sm:flex sm:flex-grow sm:ml-6 sm:space-x-8">
              <a
                href="#features"
                className="border-transparent text-gray-600 hover:border-blue-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                onClick={handleClick}
              >
                {t("header.features")}
              </a>
              <a
                href="#pricing"
                className="border-transparent text-gray-600 hover:border-blue-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                onClick={handleClick}
              >
                {t("header.pricing")}
              </a>

              <Link
                to="/analytics"
                className="border-transparent text-gray-600 hover:border-blue-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                {t("header.analytics")}
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:justify-end sm:gap-2">
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                {t("header.sign-in")}
              </button> */}
              <LanguageSelector />
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
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="w-full absolute left-0 bg-white shadow-md z-50 p-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900"
              onClick={closeMobileMenu}
            >
              {t("header.features")}
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-gray-900"
              onClick={closeMobileMenu}
            >
              {t("header.pricing")}
            </a>
            <Link
              to="/analytics"
              className="text-gray-600 hover:text-gray-900"
              onClick={closeMobileMenu}
            >
              {t("header.analytics")}
            </Link>
            <button
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600"
              onClick={closeMobileMenu}
            >
              {t("header.sign-in")}
            </button>

            {/* Language Selector */}
            <div className="flex justify-center space-x-4 border-t pt-4">
              <button
                className="text-gray-600 text-sm hover:text-gray-900"
                onClick={() => {
                  changeLanguage("en");
                  closeMobileMenu();
                }}
              >
                English
              </button>
              <span className="text-gray-600 text-sm">/</span>
              <button
                className="text-gray-600 text-sm hover:text-gray-900"
                onClick={() => {
                  changeLanguage("ja");
                  closeMobileMenu();
                }}
              >
                日本語
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
