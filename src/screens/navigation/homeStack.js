import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../homeScreen"
import DetailsScreen from "../detailsScreen"
import CheckOutScreen from "../checkoutScreen"
import SettingsScreen from "../settingsScreen"

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerShown: false}} />
      <Stack.Screen name="checkoutScreen" component={CheckOutScreen} options={{headerShown: false}} /> 
      <Stack.Screen name="settingsScreen" component={SettingsScreen} options={{headerShown: false}} /> 

    </Stack.Navigator>
  );
}
