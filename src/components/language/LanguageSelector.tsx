import React, { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState<string>(
    i18n.resolvedLanguage ?? "en"
  );

  useEffect(() => {
    setLanguage(i18n.resolvedLanguage ?? "en");
  }, [i18n.resolvedLanguage]);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  const languageOptions = useMemo(
    () => [
      { code: "en", label: "English" },
      { code: "ja", label: "日本語" },
    ],
    []
  );

  return (
    <div>
      <select
        id="language-select"
        value={language}
        onChange={changeLanguage}
        className="p-2 border rounded"
      >
        {languageOptions.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
