import LanguageSelector from "../language/LanguageSelector";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

const Header: React.FC = () => {
  const { t } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { i18n } = useTranslation();

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex  h-16 w-full">
          <div className="flex items-center w-full">
            <div className="flex-shrink-0">
              <Link to="/">
                <span className="ml-2 text-2xl font-bold text-blue-800">
                  TradEx
                </span>
              </Link>
            </div>
            <div className="hidden sm:flex sm:flex-grow sm:ml-6 sm:space-x-8">
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
                {t("header.analytics")}
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:justify-end sm:gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                {t("header.sign-in")}
              </button>
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
      <Menu
        anchorOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        open={Boolean(isMobileMenuOpen)}
        onClose={toggleMobileMenu}
        slotProps={{
          paper: {
            sx: {
              width: "200px",
              textAlign: "right",
              paddingY: 1,
              paddingX: 1,
              marginTop: 6,
              // marginRight: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "auto",
            },
          },
        }}
      >
        <MenuItem onClick={toggleMobileMenu}>
          <Link
            to="#features"
            className="text-gray-600 hover:text-gray-900 w-full"
          >
            {t("header.features")}
          </Link>
        </MenuItem>

        <MenuItem onClick={toggleMobileMenu}>
          <Link
            to="#pricing"
            className="text-gray-600 hover:text-gray-900 w-full"
          >
            {t("header.pricing")}
          </Link>
        </MenuItem>

        <MenuItem onClick={toggleMobileMenu}>
          <Link
            to="/analytics"
            className="text-gray-600 hover:text-gray-900 w-full"
          >
            {t("header.analytics")}
          </Link>
        </MenuItem>

        <MenuItem onClick={toggleMobileMenu}>
          <button className="text-gray-600 hover:text-gray-900 text-right w-full">
            {t("header.sign-in")}
          </button>
        </MenuItem>
        <div className="flex justify-end space-x-2">
          <MenuItem>
            <button
              className="text-gray-600 text-sm hover:text-gray-900 text-right w-full"
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </MenuItem>
          <span className="text-gray-600 text-right text-sm flex items-center">
            {" "}
            /{" "}
          </span>
          <MenuItem>
            <button
              className="text-gray-600 text-sm hover:text-gray-900 text-right w-full"
              onClick={() => changeLanguage("ja")}
            >
              JA
            </button>
          </MenuItem>
        </div>
      </Menu>
    </nav>
  );
};

export default Header;
