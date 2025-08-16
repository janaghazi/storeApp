import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../homeScreen"
import DetailsScreen from "../detailsScreen"

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: "details" }} />
      
    </Stack.Navigator>
  );
}
