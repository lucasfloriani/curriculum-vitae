import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";
import commonStyles from "../../common/styles";

const styles = StyleSheet.create({
  roleSubSection: {
    marginBottom: 18,
  },
  roleSubTitle: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.light,
    fontSize: 10,
    letterSpacing: 0.9,
    fontWeight: 700,
    marginBottom: 6,
  },
  roleContent: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.light,
    fontSize: 8,
    letterSpacing: 1,
    lineHeight: 1.3,
    fontWeight: 400,
    width: 190,
  },
});

const Role = () => {
  return (
    <View>
      <Text style={commonStyles.sectionTitle}>EXPERIÊNCIA PROFISSIONAL</Text>
      <View style={styles.roleSubSection}>
        <Text style={styles.roleSubTitle}>Tech Lead</Text>
        <Text style={styles.roleContent}>FOTON TECH</Text>
        <Text style={styles.roleContent}>JANEIRO 2021 - ATUAL</Text>
      </View>
      <View style={styles.roleSubSection}>
        <Text style={styles.roleSubTitle}>Fullstack Developer</Text>
        <Text style={styles.roleContent}>FOTON TECH</Text>
        <Text style={styles.roleContent}>JULHO 2020 - JANEIRO 2021</Text>
      </View>
      <View style={styles.roleSubSection}>
        <Text style={styles.roleSubTitle}>Programador Freelancer</Text>
        <Text style={styles.roleContent}>FREELANCER</Text>
        <Text style={styles.roleContent}>OUTUBRO 2019 - JULHO 2020</Text>
      </View>
      <View style={styles.roleSubSection}>
        <Text style={styles.roleSubTitle}>Programador</Text>
        <Text style={styles.roleContent}>BPLUS TECNOLOGIA LTDA.</Text>
        <Text style={styles.roleContent}>JANEIRO 2018 - OUTUBRO 2019</Text>
      </View>
      <View style={styles.roleSubSection}>
        <Text style={styles.roleSubTitle}>Programador Web</Text>
        <Text style={styles.roleContent}>XTHOR SOLUÇÕES TECNOLOGICAS</Text>
        <Text style={styles.roleContent}>SETEMBRO 2015 - JANEIRO 2018</Text>
      </View>
    </View>
  );
};

export default Role;
