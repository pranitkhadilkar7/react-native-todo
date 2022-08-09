import { ListRenderItemInfo, StyleSheet, Text, View } from "react-native"

type Props = {
  itemData: ListRenderItemInfo<string>
}

export function GoalItem({ itemData }: Props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item}</Text>
    </View>
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
