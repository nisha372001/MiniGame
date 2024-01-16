import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: "#ffffff",
    textAlign: "center",
    // borderWidth: Platform.OS == "android" ? 2 : 0,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    // borderColor: "#ffffff",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
