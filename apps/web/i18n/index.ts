import englishTranslations from "./translations/en-US.json";
import brazilianTranslations from "./translations/pt-BR.json";

export const defaultLanguage = "en-US";

const translations = {
  [defaultLanguage]: englishTranslations,
  en: englishTranslations,
  "pt-BR": brazilianTranslations,
  pt: brazilianTranslations,
};

export default translations;
