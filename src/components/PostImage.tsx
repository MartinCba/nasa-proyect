import { FC } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { PostImageType, RootStackParams } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Detail"
>;

export const PostImage: FC<PostImageType> = ({
  title,
  date,
  url,
  explanation,
}) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();
  const handleViewPress = () => {
    navigate("Detail", { date, title, url, explanation });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity style={styles.button} onPress={handleViewPress}>
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
