import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: Colors.primary700,
    backgroundColor: Colors.accent500,
    padding: 12,
    borderRadius: 40,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
