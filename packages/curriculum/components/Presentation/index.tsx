import React from "react";
import { Text, View } from "@react-pdf/renderer";
import commonStyles from "../../common/styles";
import useLanguageContext from "../Providers/Language/useLanguage";

const Presentation = () => {
  const translations = useLanguageContext();

  return (
    <View>
      <Text style={commonStyles.sectionTitle}>
        {translations["presentation:title"]}
      </Text>
      <Text style={commonStyles.sectionContent}>
        {translations["presentation:content"]}
      </Text>
    </View>
  );
};

export default Presentation;
