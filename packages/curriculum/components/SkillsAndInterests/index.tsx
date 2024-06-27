import React from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import commonStyles from "../../common/styles";
import List from "../../common/List";
import useLanguageContext from "../Providers/Language/useLanguage";

const styles = StyleSheet.create({
  skillsAndInterests: {
    marginTop: 12,
  },
});

const SkillsAndInterests = () => {
  const translation = useLanguageContext();

  return (
    <View style={styles.skillsAndInterests}>
      <Text style={commonStyles.sectionTitle}>
        {translation["skillsAndInterests:title"]}
      </Text>
      <List>
        <List.Item prefix={translation["skillsAndInterests:skillsTitle"]}>
          {translation["skillsAndInterests:skills"].join(", ")}.
        </List.Item>
        <List.Item prefix={translation["skillsAndInterests:interestsTitle"]}>
          {translation["skillsAndInterests:interests"]}
        </List.Item>
      </List>
    </View>
  );
};

export default SkillsAndInterests;
