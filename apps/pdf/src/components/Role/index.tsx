import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";
import commonStyles from "../../common/styles";
import useLanguageContext from "../Providers/Language/useLanguage";
import { OptionsKey } from "../../i18n/types";

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
  const translations = useLanguageContext();
  const data = Object.keys(translations)
    .filter(
      (key): key is OptionsKey =>
        key.startsWith("role:") && key !== "role:title"
    )
    .reduce((list, key) => {
      const splittedKey = key.split(":");
      const orderNumber = parseInt(splittedKey[1], 10);
      const infoName = splittedKey[2];

      if (list[orderNumber]) {
        list[orderNumber] = {
          ...list[orderNumber],
          [infoName]: translations[key],
        };
        return list;
      }

      list[orderNumber] = {
        "job-title": "",
        "company-name": "",
        time: "",
        [infoName]: translations[key],
      };

      return list;
    }, [] as { "job-title": string; "company-name": string; time: string }[]);

  return (
    <View>
      <Text style={commonStyles.sectionTitle}>EXPERIÊNCIA PROFISSIONAL</Text>
      {data.map((info) => (
        <View style={styles.roleSubSection} key={info.time}>
          <Text style={styles.roleSubTitle}>{info["job-title"]}</Text>
          <Text style={styles.roleContent}>{info["company-name"]}</Text>
          <Text style={styles.roleContent}>{info.time}</Text>
        </View>
      ))}
    </View>
  );
};

export default Role;
