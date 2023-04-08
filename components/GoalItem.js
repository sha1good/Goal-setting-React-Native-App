import { View, StyleSheet, Text, Pressable,} from "react-native";

function GoalItem({ itemData, onDeleteGoal, id }) {
  return (
    <Pressable
      onPress={onDeleteGoal.bind(this, id)}
      style={(item) => item.pressed && styles.onPressed}
      android_ripple={{ color: "#210644" }}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 6,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  onPressed: {
    opacity: 0.2,
  },
  goalText: {
    color: "white",
  },
});
