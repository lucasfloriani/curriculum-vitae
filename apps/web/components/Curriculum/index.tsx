"use client";

import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const flutuate = keyframes`
  0 {
    transform: rotateX(51deg) rotateZ(43deg);
    box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
      28px 28px 28px 0 rgba(34, 33, 81, 0.25);
  }
  100% {
    transform: translate3d(0px, -16px, 0px) rotateX(51deg) rotateZ(43deg);
    box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
      54px 54px 28px -10px rgba(34, 33, 81, 0.15);
  }
`;

const PDFWrapper = styled.a`
  display: inline-flex;
  overflow: hidden;
  justify-self: flex-end;
  cursor: pointer;
  animation: ${flutuate} infinite alternate 2s ease-in-out;
  transform: rotateX(51deg) rotateZ(43deg);
  transform-style: preserve-3d;
  border-radius: 32px;
`;

const Curriculum = () => {
  return (
    <PDFWrapper href="curriculum.pdf" download>
      <Document file="curriculum.pdf" className="pdf-document">
        <Page
          className="pdf-document-page"
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </PDFWrapper>
  );
};

export default Curriculum;
