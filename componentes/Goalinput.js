import { useState } from "react"
import { View, TextInput, Button, StyleSheet} from "react-native"

function GoalInput({onAddGoal}){
    const [enterdGoalText, setEnteredGoalText] = useState('')

    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enterdGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }

    return(
        <View style={StyleSheet.inputContainer}>
            <TextInput 
            style={StyleSheet.textInput}
            placeholder='Your Goal'
            onChangeText={handleInputGoal}
            value={enterdGoalText} />
            
                <Button 
                title="Add Goal"
                color={'#FC4100'}
                onPress={addGoalHandler} />
        </View>
    )
}

export default GoalInput