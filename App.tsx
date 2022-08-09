import { useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { GoalInput } from "./components/GoalInput"
import { GoalItem } from "./components/GoalItem"

export default function App() {
  const [goalsList, setGoalsList] = useState<string[]>([])

  function onAddGoal(goal: string) {
    setGoalsList((prev) => [...prev, goal])
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalToList={onAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => <GoalItem itemData={itemData} />}
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
