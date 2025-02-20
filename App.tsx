import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Platform, StatusBar as RNStatusBar } from "react-native";
import { Routes } from "./src/routes/Routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
  },
});
