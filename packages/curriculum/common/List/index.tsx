import React from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import defaultTheme from "../../theme/default";

const styles = StyleSheet.create({
  item: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 2,
    paddingRight: 8,
  },
  symbolWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.xLight,
    fontSize: 11,
    fontWeight: 600,
    marginRight: 4,
  },
  prefixText: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.xLight,
    fontSize: 11,
    fontWeight: 600,
    marginRight: 8,
  },
  text: {
    fontFamily: defaultTheme.fonts.secondary,
    color: defaultTheme.colors.grey.normal,
    fontSize: 11,
  },
});

interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return <View>{children}</View>;
};

interface ListItemProps {
  children: React.ReactNode;
  prefix?: string;
}

const ListItem = ({ children, prefix }: ListItemProps) => {
  return (
    <View style={styles.item}>
      <View style={styles.symbolWrapper}>
        <Text style={styles.icon}>•</Text>
        {prefix && <Text style={styles.prefixText}>{prefix}:</Text>}
      </View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

List.Item = ListItem;

export default List;
