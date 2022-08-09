import {
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { Goal } from "../App"

type Props = {
  itemData: ListRenderItemInfo<Goal>
  onGoalPress: (id: string) => void
}

export function GoalItem({ itemData, onGoalPress }: Props) {
  return (
    <Pressable onPress={() => onGoalPress(itemData.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
