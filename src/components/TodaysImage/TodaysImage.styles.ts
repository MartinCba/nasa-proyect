import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },

  image: {
    width: "100%",
    height: 190,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "white",
  },
  title: {
    color: "white",
    fontSize: 20,
    marginVertical: 12,
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
