import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import GoalInput from './componentes/Goalinput';
import GoalItem from './componentes/Goaltem';

export default function App() {
  const [goals, setGoals] = useState([])

  function handleAddGoal(enterdGoalText){
    setGoals(() => [...goals,
    {text: enterdGoalText,
  key: Math.random().tostring}])
  console.log(goals)
  }

  function handleDeleteGoal(id){
    console.log('DELETE')
    const deleteGoal = goals.filter((goal) => {return goal.key !== id})
    setGoals(deleteGoal)
  }

  return (
    <View style={styles.container}>
      <GoalInput
      onAddGoal={handleAddGoal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
        data={goals}
        renderItem={ (itemData) => {
          return(
            <GoalItem
            itemData={itemData}
            OndeLeteItem={handleDeleteGoal}
            />
          )
        }}

        keyExtractor={(item)=>{
          return item.id
        }}
        />
        
      </View>
    </View>
  );
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  goalsContainer: {
    flex: 5
  },
});
