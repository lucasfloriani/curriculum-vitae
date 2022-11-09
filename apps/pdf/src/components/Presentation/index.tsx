import React from "react";
import { Text, View } from "@react-pdf/renderer";
import commonStyles from "../../common/styles";

const Presentation = () => {
  return (
    <View>
      <Text style={commonStyles.sectionTitle}>APRESENTAÇÃO</Text>
      <Text style={commonStyles.sectionContent}>
        Desenvolvedor Fullstack Senior com Go/React com experiência como Tech
        Lead.
      </Text>
    </View>
  );
};

export default Presentation;
