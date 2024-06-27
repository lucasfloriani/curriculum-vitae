import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";
import commonStyles from "../../common/styles";
import useLanguageContext from "../Providers/Language/useLanguage";

const styles = StyleSheet.create({
  formation: {
    marginTop: 12,
  },
  formationSubSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
  },
});

const Formation = () => {
  const translations = useLanguageContext();

  return (
    <View style={styles.formation}>
      <Text style={commonStyles.sectionTitle}>
        {translations["formation:title"]}
      </Text>
      {translations.formations.map((formation) => (
        <View style={styles.formationSubSection}>
          <Text style={styles.formationSubTitle}>
            {formation.title} - {formation.description}
          </Text>
          <Text style={styles.formationContent}>{formation.time}</Text>
        </View>
      ))}
    </View>
  );
};

export default Formation;
