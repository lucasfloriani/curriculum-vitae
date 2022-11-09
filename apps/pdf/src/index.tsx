import React from "react";
import ReactPDF from "@react-pdf/renderer";
import Curriculum from "./components/Curriculum/Curriculum";
import "./fonts/registerFonts";

ReactPDF.render(<Curriculum />, `${__dirname}/../../web/public/curriculum.pdf`);
