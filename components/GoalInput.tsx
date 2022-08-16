import { useState } from "react"
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native"

type Props = {
  addGoalToList: (goal: string) => void
  visible: boolean
  closeGoalModal: () => void
}

export function GoalInput({ addGoalToList, visible, closeGoalModal }: Props) {
  const [enteredGoal, setEnteredGoal] = useState("")

  function onAddGoal() {
    addGoalToList(enteredGoal)
    setEnteredGoal("")
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!!"
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeGoalModal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoal} color="#b180f0" />
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
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    padding: 16,
    width: "100%",
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
