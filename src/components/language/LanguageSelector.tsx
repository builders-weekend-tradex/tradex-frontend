import { Fragment, useState } from "react";
import {
  Menu,
  Transition,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(
    i18n.resolvedLanguage ?? "en"
  );

  const languages = [
    { code: "en", label: "English" },
    { code: "ja", label: "日本語" },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setSelectedLang(code);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-between items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-600 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          {languages.find((lang) => lang.code === selectedLang)?.label}
          <ChevronDownIcon className="w-5 h-5 ml-2" />{" "}
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 mt-2 w-36 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {languages.map(({ code, label }) => (
            <MenuItem
              as="button"
              key={code}
              onClick={() => changeLanguage(code)}
              className="group flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {label}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default LanguageSelector;
