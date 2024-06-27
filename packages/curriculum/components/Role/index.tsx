import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";
import commonStyles from "../../common/styles";
import useLanguageContext from "../Providers/Language/useLanguage";
import List from "../../common/List";

const styles = StyleSheet.create({
  role: {
    marginBottom: 12,
  },
  roleSubSection: {
    alignItems: "baseline",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  roleSubTitle: {
    color: defaultTheme.colors.grey.light,
    fontFamily: defaultTheme.fonts.secondary,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 0.9,
    marginBottom: 6,
  },
  roleTime: {
    color: defaultTheme.colors.grey.light,
    fontFamily: defaultTheme.fonts.secondary,
    fontSize: 9,
    fontWeight: 400,
    letterSpacing: 1,
    lineHeight: 1.3,
    textAlign: "right",
  },
});

const Role = () => {
  const translations = useLanguageContext();

  return (
    <View>
      <Text style={commonStyles.sectionTitle}>
        {translations["role:title"]}
      </Text>
      {translations["roles"].map((role) => (
        <View
          style={[
            styles.role,
            { marginBottom: role.achievements.length > 0 ? 12 : 0 },
          ]}
          key={role.time}
        >
          <View style={styles.roleSubSection}>
            <Text style={styles.roleSubTitle}>
              {role.company} - {role.title}
            </Text>
            <Text style={styles.roleTime}>{role.time}</Text>
          </View>
          {role.achievements.length > 0 && (
            <List>
              {role.achievements.map((achievement) => (
                <List.Item key={achievement}>{achievement}</List.Item>
              ))}
            </List>
          )}
        </View>
      ))}
    </View>
  );
};

export default Role;
