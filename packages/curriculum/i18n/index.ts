import englishTranslations from "./translations/en-US.json";
import brazilianTranslations from "./translations/pt-BR.json";

export const defaultLanguage = "en-US";

const translations = {
  [defaultLanguage]: englishTranslations,
  "pt-BR": brazilianTranslations,
};

export const defaultTranslation = translations[defaultLanguage];

export default translations;
