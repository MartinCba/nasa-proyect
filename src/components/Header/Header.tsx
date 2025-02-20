import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./Header.styles";

const logo = require("../../../assets/nasa-logo.png");

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image source={logo} style={styles.image} />
      </View>
    </View>
  );
};
