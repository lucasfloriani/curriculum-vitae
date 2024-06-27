import React from "react";
import { Page, View, Document, StyleSheet } from "@react-pdf/renderer";
import Header from "../Header";
import Role from "../Role";
import Formation from "../Formation";
import SkillsAndInterests from "../SkillsAndInterests";
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
    paddingRight: 16,
  },
  body: {
    paddingLeft: 20,
    paddingTop: 20,
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
            <Role />
            <Formation />
            <SkillsAndInterests />
          </View>
        </View>
        <Sidebar />
      </Page>
    </Document>
  </LanguageProvider>
);

export default Curriculum;
