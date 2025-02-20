import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";
import { Header } from "../components/Header";

export const Detail = () => {
  const {
    params: { title, date, url, explanation },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: "#2c449d",
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
  },
  image: {
    width: "100%",
    height: "50%",
    borderColor: "white",
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  date: {
    color: "white",
    fontSize: 16,
  },
  explanationContainer: 
  {
    flex: 1,
    marginVertical: 16,
    maxHeight: 200,
  },
  explanation: {
    color: "white",
    fontSize: 16
  },
  button: {},
  buttonText: {},
});
