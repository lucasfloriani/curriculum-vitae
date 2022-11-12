import React from "react";
import { Page, View, Document, StyleSheet } from "@react-pdf/renderer";
import Header from "../Header";
import Presentation from "../Presentation";
import Contact from "../Contact";
import Courses from "../Courses";
import Role from "../Role";
import Formation from "../Formation";
import Tecnologies from "../Tecnologies";
import Sidebar from "../Sidebar";
import defaultTheme from "../../theme/default";
import { Languages } from "../../i18n/types";
import LanguageProvider from "../Providers/Language";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: defaultTheme.colors.grey.dark,
  },
  mainContent: {
    flexDirection: "column",
    width: "85%",
  },
  body: {
    paddingLeft: 20,
    paddingTop: 60,
    display: "flex",
    flexDirection: "row",
  },
  bodyColumn: {
    width: "50%",
  },
});

interface Props {
  language: Languages;
}

const Curriculum = ({ language }: Props) => (
  <LanguageProvider language={language}>
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.mainContent}>
          <Header />
          <View style={styles.body}>
            <View style={styles.bodyColumn}>
              <Presentation />
              <Contact />
              <Courses />
            </View>
            <View style={styles.bodyColumn}>
              <Role />
              <Formation />
              <Tecnologies />
            </View>
          </View>
        </View>
        <Sidebar />
      </Page>
    </Document>
  </LanguageProvider>
);

export default Curriculum;
