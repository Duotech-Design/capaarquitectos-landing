import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation("global");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const currentLanguage = i18n.language; // Obtener el idioma actual

  const handleChange = (option: string) => {
    i18n.changeLanguage(option);
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex justify-center w-full rounded-md px-3 py-2 text-sm font-medium text-white hover:text-white focus:outline-none"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {/* Añadimos espacio entre EN y ES con mx-2 */}
        <span className={`${currentLanguage === 'en' ? 'underline' : ''} mx-2`}>EN</span>
        /
        <span className={`${currentLanguage === 'es' ? 'underline' : ''} mx-2`}>ES</span>
        <svg
          className={`ml-2 -mr-1 h-5 w-5 transition-transform duration-300 ${
            dropdownOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`${
          dropdownOpen
            ? "fade-in origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-black backdrop-blur-sm ring-1 ring-black ring-opacity-5"
            : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          <button
            onClick={() => handleChange("en")}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-darkGray ${
              currentLanguage === "en"
                ? "text-white font-cocoUltralight underline decoration-white"
                : "text-white"
            }`}
            role="menuitem"
          >
            {t("navbar.english")}
          </button>
          <button
            onClick={() => handleChange("es")}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-darkGray ${
              currentLanguage === "es"
                ? "text-white font-cocoUltralight underline decoration-white"
                : "text-white"
            }`}
            role="menuitem"
          >
            {t("navbar.spanish")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;
