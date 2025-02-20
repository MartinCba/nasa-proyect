import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import { Header } from "../../components/Header/Header";
import { styles } from "./Detail.styles";

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
    </View>
  );
};


