import { Text, View, Image, TouchableOpacity } from "react-native";
import { PostImageType, RootStackParams } from "../../types/index";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./TodaysImage.styles";

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Detail"
>;

export const TodaysImage: FC<PostImageType> = ({
  date,
  title,
  url,
  explanation,
}) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();
  const handleViewPress = () => {
    navigate("Detail", { date, title, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <TouchableOpacity style={styles.button} onPress={handleViewPress}>
        <Text style={styles.buttonText}>View</Text>
      </TouchableOpacity>
    </View>
  );
};
