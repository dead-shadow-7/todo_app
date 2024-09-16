import { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoaltext] = useState("");

  function goalInputHandler(enteredGoalText) {
    setEnteredGoaltext(enteredGoalText);
  }
  function addGoalsHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoaltext("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalsHandler} />
    </View>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
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
});
