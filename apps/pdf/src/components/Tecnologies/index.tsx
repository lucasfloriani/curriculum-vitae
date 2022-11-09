import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";
import commonStyles from "../../common/styles";

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
  return (
    <View style={styles.tecnologies}>
      <Text style={commonStyles.sectionTitle}>TECNOLOGIAS</Text>
      <Text style={styles.tecnologiesContent}>
        Go - Git - CSS - NPM - Gulp - SASS - CSS3 - REST - HTML - Linux - Scrum
        - Redux - GitLab - Apollo - MySQL - Docker - GitHub - React.js - GraphQL
        - Webpack - JavaScript - WordPress - Redux Saga - PostgreSQL - React
        Native
      </Text>
    </View>
  );
};

export default Tecnologies;
