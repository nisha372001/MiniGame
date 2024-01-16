import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 24,
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth > 380 ? 12 : 24,
    borderRadius: deviceWidth > 380 ? 12 : 8,
    justifyContent: "center",
  },
  numberText: {
    fontSize: deviceWidth > 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});
