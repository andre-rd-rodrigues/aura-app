const { translations } = require("@/translations");

const useTranslations = (lang) => {
  return translations[lang];
};

export default useTranslations;
