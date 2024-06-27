import { Languages } from "../i18n/types";

const devName = "lucas-floriani";

export const getPDFFilename = (language: Languages): string =>
  language.startsWith("pt")
    ? `${devName}-resume-pt-br.pdf`
    : `${devName}-resume-en-us.pdf`;
