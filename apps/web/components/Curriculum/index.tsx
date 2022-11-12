"use client";

import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { useMedia, useWindowSize } from "react-use";
import useTranslations from "../../hooks/useTranslations";
import { getPDFFilename } from "../../utils/pdf";
import { Loading, LoadingWrapper, PDFWrapper } from "./styles";

const Curriculum = () => {
  const { loading, currentLanguage } = useTranslations();
  const [pdfHeight, setPdfHeight] = useState(0);
  const { width } = useWindowSize();
  const isWide = useMedia("(max-width: 768px)");

  useEffect(() => {
    const containerWidth = 1200;
    const wrapperWidth = Math.min(width, containerWidth);
    const columns = isWide ? 1 : 2;
    const pdfWrapperWidth = wrapperWidth / columns - 30;
    setPdfHeight(pdfWrapperWidth * 0.8);
  }, [isWide, width]);

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
