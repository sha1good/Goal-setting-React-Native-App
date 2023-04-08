import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput({ addGoalHandler, showModal, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function onAddGoal() {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/imgaes/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textContainer}
          placeholder="Your course goals!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoal} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "#3116b6",
  },
  textContainer: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    marginHorizontal: 16,
    width: 100,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
