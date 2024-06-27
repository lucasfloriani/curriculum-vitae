import React from "react";
import ReactPDF from "@react-pdf/renderer";
import registerRequiredFonts from "pdf-fonts/registerFontsNode";
import Curriculum from "curriculum";
import translation from "curriculum/i18n";
import { Languages } from "curriculum/i18n/types";

registerRequiredFonts("../../packages/pdf-fonts");

const devName = "lucas-floriani";

// TODO: We have the same code at apps\web\utils\pdf.ts, let's abstract it later
const generatePDFPath = (language: Languages) =>
  `${__dirname}/../web/public/${devName}-resume-${language.toLowerCase()}.pdf`;

const main = async () => {
  await Promise.all(
    Object.keys(translation).map((language) =>
      ReactPDF.render(
        <Curriculum language={language as Languages} />,
        generatePDFPath(language as Languages)
      )
    )
  );
};

main();
