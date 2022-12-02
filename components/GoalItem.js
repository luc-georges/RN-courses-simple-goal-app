import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteGoal, id }) => {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemsText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalItemsText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.2,
  },
});
