import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingTop: 65,
  },
  firstName: {
    fontFamily: defaultTheme.fonts.primary,
    color: defaultTheme.colors.grey.light,
    fontSize: 50,
    letterSpacing: 1.4,
    fontWeight: 700,
  },
  lastName: {
    fontFamily: defaultTheme.fonts.primary,
    color: defaultTheme.colors.grey.light,
    fontSize: 50,
    letterSpacing: 1.4,
    fontWeight: 700,
    marginTop: 6,
  },
  roleDescription: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.normal,
    letterSpacing: 1.4,
    fontWeight: 600,
    fontSize: 16,
  },
});

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.firstName}>LUCAS</Text>
      <Text style={styles.lastName}>FLORIANI</Text>
      <Text style={styles.roleDescription}>Desenvolvedor Full Stack</Text>
    </View>
  );
};

export default Header;
