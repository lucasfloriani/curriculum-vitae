"use client";

import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

export default function Web() {
  return (
    <div>
      <Document file="curriculum.pdf">
        <Page
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </div>
  );
}
