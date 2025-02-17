import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View>
      <View>
        <Text>Header</Text>
      </View>
      <View>
        <Image source={require('../../assets/nasa-logo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
