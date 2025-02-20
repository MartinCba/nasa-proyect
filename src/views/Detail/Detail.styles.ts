import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  explanationContainer: {
    flex: 1,
    marginVertical: 16,
    maxHeight: 200,
  },
  explanation: {
    color: "white",
    fontSize: 16,
  },
});
