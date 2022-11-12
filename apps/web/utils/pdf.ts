import { Languages } from "../i18n/types";

export const getPDFFilename = (language: Languages): string =>
  language.startsWith("pt") ? "curriculum-pt-br.pdf" : "curriculum-en-us.pdf";
