import { useState } from "react"
import { Button, FlatList, StyleSheet, View } from "react-native"
import { GoalInput } from "./components/GoalInput"
import { GoalItem } from "./components/GoalItem"

export type Goal = {
  id: string
  text: string
}

export default function App() {
  const [goalsList, setGoalsList] = useState<Goal[]>([])
  const [startAddGoal, setStartAddGoal] = useState(false)

  function onAddGoal(goal: string) {
    setGoalsList((prev) => [
      ...prev,
      { text: goal, id: Math.random().toString() },
    ])
  }

  function deleteGoal(id: string) {
    setGoalsList((prev) => {
      return prev.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={() => setStartAddGoal(true)}
      />
      <GoalInput
        addGoalToList={onAddGoal}
        visible={startAddGoal}
        closeGoalModal={() => setStartAddGoal(false)}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => (
            <GoalItem itemData={itemData} onGoalPress={deleteGoal} />
          )}
          keyExtractor={(item, index) => `${item}_${index}`}
        />
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
  goalsContainer: {
    flex: 5,
  },
})
