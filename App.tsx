import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("")
  const [goalsList, setGoalsList] = useState<string[]>([])

  function onAddGoal() {
    setGoalsList((prev) => [...prev, enteredGoal])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!!"
          onChangeText={setEnteredGoal}
        />
        <Button title="Add Goal" onPress={onAddGoal} />
      </View>
      <View style={styles.goalsContainer}>
        {goalsList.map((goal, index) => (
          <View key={`${goal}_${index}`} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    padding: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
})
