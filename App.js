import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoaltext] = useState("");

  function goalInputHandler(enteredGoalText) {
    setEnteredGoaltext(enteredGoalText);
  }
  function addGoalsHandler() {
    console.log(enteredGoalText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalsHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderColor: "#cccccc",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 3,
  },
});
