import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import commonStyles from "../../common/styles";
import useLanguageContext from "../Providers/Language/useLanguage";

const styles = StyleSheet.create({
  contact: {
    marginTop: 28,
  },
});

const Contact = () => {
  const translations = useLanguageContext();

  return (
    <View style={styles.contact}>
      <Text style={commonStyles.sectionTitle}>
        {translations["contact:title"]}
      </Text>
      <Text style={commonStyles.sectionContent}>
        {translations["contact:phone"]}
      </Text>
      <Text style={commonStyles.sectionContent}>
        {translations["contact:email"]}
      </Text>
      <Text style={commonStyles.sectionContent}>
        {translations["contact:github"]}
      </Text>
      <Text style={commonStyles.sectionContent}>
        {translations["contact:linkedin"]}
      </Text>
    </View>
  );
};

export default Contact;
