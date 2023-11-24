import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Tasks';

export default function App() {
  return (
    <View style={styles.container}>
      
{/* Main Tasks */}
      <View style={styles.taskswrapper}>
        <Text style={styles.sectionTitle}>Main Tasks</Text>

        <View style={styles.items}>
{/*List Tasks here*/}
        <Task text={'Task 1'}/>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskswrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  items: {

  },
});
