import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";
import commonStyles from "../../common/styles";

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
  return (
    <View style={styles.formation}>
      <Text style={commonStyles.sectionTitle}>FORMAÇÃO ACADÊMICA</Text>
      <View style={styles.formationSubSection}>
        <Text style={styles.formationSubTitle}>UDESC - CEPLAN</Text>
        <Text style={styles.formationContent}>
          BACHAREL EM SISTEMAS DE INFORMAÇÃO.
        </Text>
        <Text style={styles.formationContent}>2014-2019</Text>
      </View>
    </View>
  );
};

export default Formation;
