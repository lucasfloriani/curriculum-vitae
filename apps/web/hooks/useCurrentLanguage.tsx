import { useEffect, useState } from "react";
import { Languages } from "../i18n/types";
import translations, { defaultLanguage } from "../i18n";

const formatToLanguage = (text: string | undefined): Languages => {
  if (!text) {
    return defaultLanguage;
  }

  if (text.includes("-")) {
    const formattedLanguage = text
      .split("-")
      .map((splitText, index) =>
        index === 0 ? splitText : splitText.toUpperCase()
      )
      .join("-");
    return Object.keys(translations).includes(formattedLanguage)
      ? (formattedLanguage as Languages)
      : defaultLanguage;
  }

  const isValidLanguage = Object.keys(translations)
    .filter((key) => !key.includes("-"))
    .includes(text);

  return isValidLanguage ? (text as Languages) : defaultLanguage;
};

interface ReturnType {
  currentLanguage: Languages;
  loading: boolean;
}

const useCurrentLanguage = (): ReturnType => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentLanguage, setCurrentLanguage] =
    useState<Languages>(defaultLanguage);

  useEffect(() => {
    const langElement = document.getElementById("lang");
    setCurrentLanguage(formatToLanguage(langElement?.lang));
    setLoading(false);
  }, []);

  return { currentLanguage, loading };
};

export default useCurrentLanguage;
