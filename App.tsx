import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

  export default  function App (){

  return (
      <View style={styles.container}> 
        <Text>Hello World!!</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
