import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";
import commonStyles from "../../common/styles";
import useLanguageContext from "../Providers/Language/useLanguage";
import { OptionsKey } from "../../i18n/types";

const styles = StyleSheet.create({
  courses: {
    marginTop: 28,
  },
  listWrapper: {
    flexDirection: "row",
  },
  listIcon: {
    color: defaultTheme.colors.grey.xLight,
    fontSize: 8,
    marginRight: 4,
  },
  listText: {
    fontFamily: defaultTheme.fonts.primary,
    color: defaultTheme.colors.grey.xLight,
    fontSize: 8,
    letterSpacing: 1.1,
    lineHeight: 1.3,
    fontWeight: 300,
    width: 190,
  },
});

const Courses = () => {
  const translations = useLanguageContext();
  // TODO: Fix types from courses variable, it's string[] for now
  const courses = Object.keys(translations)
    .filter((key): key is OptionsKey => key.startsWith("courses:course:title:"))
    .map((key) => translations[key]);

  return (
    <View style={styles.courses}>
      <Text style={commonStyles.sectionTitle}>
        {translations["courses:title"]}
      </Text>
      {courses.map((course) => (
        <View style={styles.listWrapper} key={course}>
          <Text style={styles.listIcon}>•</Text>
          <Text style={styles.listText}>{course}</Text>
        </View>
      ))}
    </View>
  );
};

export default Courses;
