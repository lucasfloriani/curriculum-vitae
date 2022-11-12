import React from "react";
import translations from "../../../i18n";
import { Languages } from "../../../i18n/types";
import { LanguageContext } from "./useLanguage";

type LanguageProviderProps = {
  children?: React.ReactNode;
  language: Languages;
};

export const LanguageProvider = ({
  children,
  language,
}: LanguageProviderProps) => {
  const translation = translations[language];

  return (
    <LanguageContext.Provider value={translation}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
