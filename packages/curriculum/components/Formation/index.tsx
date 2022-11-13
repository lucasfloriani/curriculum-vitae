import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";
import commonStyles from "../../common/styles";
import useLanguageContext from "../Providers/Language/useLanguage";

const styles = StyleSheet.create({
  formation: {
    marginTop: 8,
  },
  formationSubSection: {},
  formationSubTitle: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.light,
    fontSize: 10,
    letterSpacing: 0.9,
    fontWeight: 700,
    marginBottom: 6,
  },
  formationContent: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.light,
    fontSize: 8,
    letterSpacing: 1,
    lineHeight: 1.3,
    fontWeight: 400,
    width: 220,
  },
});

const Formation = () => {
  const translations = useLanguageContext();

  return (
    <View style={styles.formation}>
      <Text style={commonStyles.sectionTitle}>
        {translations["formation:title"]}
      </Text>
      <View style={styles.formationSubSection}>
        <Text style={styles.formationSubTitle}>
          {translations["formation:section:1:title"]}
        </Text>
        <Text style={styles.formationContent}>
          {translations["formation:section:1:content:1"]}
        </Text>
        <Text style={styles.formationContent}>
          {translations["formation:section:1:content:2"]}
        </Text>
      </View>
    </View>
  );
};

export default Formation;
