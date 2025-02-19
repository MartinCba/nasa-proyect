import { FC } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { PostImageType } from "../types";

export const PostImage: FC<PostImageType> = ({ title, date }) => {
  return (
    <View style={styles.container}>
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
    backgroundColor: "rgba(18,39,113,255)",
    marginBottom: 12,
    borderRadius: 20,
    padding: 16,
  },
  title: {
    color: "white",
    fontSize: 18,
    marginBottom: 12,
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
