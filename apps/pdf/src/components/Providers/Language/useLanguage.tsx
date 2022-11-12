import { createContext, useContext, useCallback } from "react";

import { Options } from "../../../i18n/types";
import { defaultTranslation } from "../../../i18n";

export const LanguageContext = createContext<Options>(defaultTranslation);

const useLanguageContext = () => useContext(LanguageContext);

export default useLanguageContext;
