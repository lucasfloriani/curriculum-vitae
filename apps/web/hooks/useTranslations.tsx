import { Options, Languages } from "../i18n/types";
import translations, { defaultLanguage } from "../i18n";
import useCurrentLanguage from "./useCurrentLanguage";

interface ReturnType {
  currentLanguage: Languages;
  loading: boolean;
  translation: Options;
}

const useTranslations = (): ReturnType => {
  const { currentLanguage, loading } = useCurrentLanguage();

  return {
    currentLanguage,
    loading,
    translation: Object.keys(translations).includes(currentLanguage)
      ? translations[currentLanguage]
      : translations[defaultLanguage],
  };
};

export default useTranslations;
