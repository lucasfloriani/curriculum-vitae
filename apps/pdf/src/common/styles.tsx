import { StyleSheet } from "@react-pdf/renderer";
import defaultTheme from "../theme/default";

const commonStyles = StyleSheet.create({
  sectionTitle: {
    fontFamily: defaultTheme.fonts.primary,
    color: defaultTheme.colors.grey.normal,
    fontSize: 13,
    letterSpacing: 0.9,
    fontWeight: 700,
    marginBottom: 5,
  },
  sectionContent: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.light,
    fontSize: 8,
    letterSpacing: 0.1,
    lineHeight: 1.3,
    fontWeight: 400,
    width: 190,
  },
});

export default commonStyles;
