import { Text, View, ScrollView } from "react-native";
import { FC } from "react";
import { PostImageType } from "../../types";
import { PostImage } from "../PostImage/PostImage";
import { styles } from "./LastFiveDaysImages.styles";

export const LastFiveDaysImages: FC<{ postImages?: PostImageType[] }> = ({
  postImages,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {postImages?.map((postImage) => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};


