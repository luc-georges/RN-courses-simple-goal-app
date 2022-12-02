import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  console.log("hey");
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  const deleteGoalHandler = (id) => {
    setGoalList((currentGoals) => currentGoals.filter((item) => item.id !== id));
  };

  const addGoalHandler = (enteredText) => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add new goal" color="#5e0acc" onPress={startAddGoalHandler} />
        <GoalInput
          addGoalHandler={addGoalHandler}
          modalIsVisible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsCOntainer}>
          <FlatList
            data={goalList}
            keyExtractor={(item, index) => item.id}
            renderItem={(item) => (
              <GoalItem id={item.item.id} text={item.item.text} onDeleteGoal={deleteGoalHandler} />
            )}
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
  goalsCOntainer: {
    flex: 5,
  },
});
