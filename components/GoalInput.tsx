import { useState } from "react"
import { Button, Modal, StyleSheet, TextInput, View } from "react-native"

type Props = {
  addGoalToList: (goal: string) => void
  visible: boolean
}

export function GoalInput({ addGoalToList, visible }: Props) {
  const [enteredGoal, setEnteredGoal] = useState("")

  function onAddGoal() {
    addGoalToList(enteredGoal)
    setEnteredGoal("")
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!!"
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={() => {}} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    marginBottom: 16,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "70%",
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})
