/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Image, View, StyleSheet } from "@react-pdf/renderer";
import sidebarImage from "../../images/sidebar";

const styles = StyleSheet.create({
  sidebar: {
    width: "15%",
    height: "100%",
  },
  sidebarImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

const Sidebar = () => {
  return (
    <View style={styles.sidebar}>
      <Image style={styles.sidebarImage} src={sidebarImage} />
    </View>
  );
};

export default Sidebar;
