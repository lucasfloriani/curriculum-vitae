import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";
import commonStyles from "../../common/styles";
import useLanguageContext from "../Providers/Language/useLanguage";

const styles = StyleSheet.create({
  tecnologies: {
    marginTop: 20,
  },
  tecnologiesContent: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.light,
    fontSize: 8,
    letterSpacing: 1,
    lineHeight: 1.3,
    textAlign: "justify",
    fontWeight: 400,
    width: 220,
  },
});

const Tecnologies = () => {
  const translation = useLanguageContext();

  return (
    <View style={styles.tecnologies}>
      <Text style={commonStyles.sectionTitle}>
        {translation["tecnologies:title"]}
      </Text>
      <Text style={styles.tecnologiesContent}>
        {translation["tecnologies:content"]}
      </Text>
    </View>
  );
};

export default Tecnologies;
