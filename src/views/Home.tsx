import { View, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import fetchApi from "../utils/fetch";
import { TodaysImage } from "../components/TodaysImage";
import { PostImageType } from "../types";
import { format, sub } from "date-fns";
import { LastFiveDaysImages } from "../components/LastFiveDaysImages";

export const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImageType>({});
  const [last5DaysImages, setLast5DaysImages] = useState<PostImageType[]>([]);

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    const loadLast5Images = async () => {
      try {
        const date = new Date();
        const yesterdayDate = format(sub(date, { days: 1 }), "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");
        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${yesterdayDate}`
        );
        const sortedImages = lastFiveDaysImagesResponse.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setLast5DaysImages(sortedImages);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLast5Images().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={last5DaysImages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
});
