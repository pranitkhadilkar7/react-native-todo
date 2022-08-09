import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

type Props = {
  addGoalToList: (goal: string) => void
}

export function GoalInput({ addGoalToList }: Props) {
  const [enteredGoal, setEnteredGoal] = useState("")

  function onAddGoal() {
    addGoalToList(enteredGoal)
    setEnteredGoal("")
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!!"
        onChangeText={setEnteredGoal}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={onAddGoal} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginBottom: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    flexGrow: 1,
    marginRight: 8,
    padding: 8,
  },
})
