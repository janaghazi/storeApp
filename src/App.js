import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeStack from './screens/navigation/homeStack';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
      <NavigationContainer>
        <HomeStack/>
      </NavigationContainer>
  );
}


export default App;