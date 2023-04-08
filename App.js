import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddNewGoal();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoal) =>
      currentCourseGoal.filter((item) => item.id !== id)
    );
  }

  function startAddNewGoal() {
    setOpenModal(true);
  }

  function endAddNewGoal() {
    setOpenModal(false);
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddNewGoal} />
      <GoalInput addGoalHandler={addGoalHandler} showModal={openModal} onCancel={endAddNewGoal}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              itemData={itemData}
              onDeleteGoal={deleteGoalHandler}
              id={itemData.item.id}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
