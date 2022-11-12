import React from "react";
import ReactPDF from "@react-pdf/renderer";
import Curriculum from "./components/Curriculum/Curriculum";
import "./fonts/registerFonts";
import translation from "./i18n";
import { Languages } from "./i18n/types";

const generatePDFPath = (language: Languages) =>
  `${__dirname}/../../web/public/curriculum-${language.toLowerCase()}.pdf`;

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
