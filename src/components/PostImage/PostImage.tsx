import { FC } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { PostImageType, RootStackParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./PostImage.styles";

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
