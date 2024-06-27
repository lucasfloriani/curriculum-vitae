import React from "react";
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";
import useLanguageContext from "../Providers/Language/useLanguage";

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingTop: 32,
  },
  firstName: {
    fontFamily: defaultTheme.fonts.primary,
    color: defaultTheme.colors.grey.light,
    fontSize: 28,
    letterSpacing: 1.4,
    fontWeight: 700,
  },
  lastName: {
    fontFamily: defaultTheme.fonts.primary,
    color: defaultTheme.colors.grey.light,
    fontSize: 28,
    letterSpacing: 1.4,
    fontWeight: 700,
    marginTop: 2,
  },
  roleDescription: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.normal,
    letterSpacing: 1.4,
    fontWeight: 600,
    fontSize: 14,
    marginTop: 4,
  },
  socialInfoWrapper: {
    flexDirection: "row",
    marginTop: 6,
  },
  socialInfo: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.normal,
    letterSpacing: 1,
    fontWeight: 400,
    fontSize: 10,
    marginRight: 6,
  },
});

const Header = () => {
  const translations = useLanguageContext();
  const email = "lucas.floriane@gmail.com";

  return (
    <View style={styles.header}>
      <Text style={styles.firstName}>{translations["firstName"]}</Text>
      <Text style={styles.lastName}>{translations["lastName"]}</Text>
      <Text style={styles.roleDescription}>
        {translations["header:roleDescription"]}
      </Text>
      <View style={styles.socialInfoWrapper}>
        <Link src="https://www.linkedin.com/in/lucasfloriani13">
          <Text style={styles.socialInfo}>LinkedIn</Text>
        </Link>
        <Link src="https://github.com/lucasfloriani">
          <Text style={styles.socialInfo}>Github</Text>
        </Link>
        <Link src={`mailto:${email}`}>
          <Text style={styles.socialInfo}>{email}</Text>
        </Link>
      </View>
    </View>
  );
};

export default Header;
