import { StyleSheet, View , Text, Pressable } from "react-native";

function GoalItem({itemData, OndeLeteItem, id}){

    function deleteGoalHandler(){
        OndeLeteItem(id)
        console.log('Delete Goal handeler')
    }

    return(
        <Pressable onPress={deleteGoalHandler}>
            <View style={style.goalsItem}>
                <Text style={StyleSheet.goalsItem}>{itemData.item}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#E65C19',
        color: 'white'
    },
    goalText: {
        color: 'white'
    }
})