"use client";

import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { useWindowSize } from "react-use";
import useTranslations from "../../hooks/useTranslations";
import { Languages } from "../../i18n/types";
import { Loading, LoadingWrapper, PDFWrapper } from "./styles";

const getPDFFilename = (language: Languages): string =>
  language.startsWith("pt") ? "curriculum-pt-br.pdf" : "curriculum-en-us.pdf";

const Curriculum = () => {
  const { loading, currentLanguage } = useTranslations();
  const [pdfHeight, setPdfHeight] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    // TODO: Add responsive width logic for container too
    const containerWidth = 1200;
    const wrapperWidth = Math.min(width, containerWidth);
    const pdfWrapperWidth = wrapperWidth / 2 - 30;
    setPdfHeight(pdfWrapperWidth);
  }, [width]);

  if (loading || pdfHeight === 0) {
    return null;
  }

  const pdfFilename = getPDFFilename(currentLanguage);

  return (
    <PDFWrapper href={pdfFilename} download>
      <Document
        file={pdfFilename}
        className="pdf-document"
        loading={
          <LoadingWrapper
            style={{
              height: `${pdfHeight}px`,
              width: `${Math.floor(pdfHeight / 1.41)}px`,
            }}
          >
            <Loading />
          </LoadingWrapper>
        }
      >
        <Page
          className="pdf-document-page"
          pageNumber={1}
          height={pdfHeight}
          width={Math.floor(pdfHeight / 1.41)}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </PDFWrapper>
  );
};

export default Curriculum;
