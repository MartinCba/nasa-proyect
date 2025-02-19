import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { PostImage } from "../types/index";
import { FC } from "react";

export const TodaysImage: FC<PostImage> = ({ date, title, url }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },

  image: {
    width: "100%",
    height: 190,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "white",
  },
  title: {
    color: "white",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "white",
    fontSize: 16,
  },
  button: {
    alignItems: "flex-end",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
