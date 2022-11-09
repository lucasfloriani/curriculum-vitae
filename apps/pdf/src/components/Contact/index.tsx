import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import commonStyles from "../../common/styles";

const styles = StyleSheet.create({
  contact: {
    marginTop: 28,
  },
});

const Contact = () => {
  return (
    <View style={styles.contact}>
      <Text style={commonStyles.sectionTitle}>CONTATO</Text>
      <Text style={commonStyles.sectionContent}>
        Celular: +55 47 99196-9365
      </Text>
      <Text style={commonStyles.sectionContent}>
        Email: lucas.floriane@gmail.com
      </Text>
      <Text style={commonStyles.sectionContent}>Github: @lucasfloriani</Text>
      <Text style={commonStyles.sectionContent}>
        LinkedIn: @lucasfloriani13
      </Text>
    </View>
  );
};

export default Contact;
