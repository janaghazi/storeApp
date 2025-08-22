import {useFonts} from "expo-font"
import HomeStack from './screens/navigation/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [fontsLoaded] = useFonts({
    "PTSana-Bold": require("../assets/fonts/PTSansBold.ttf"),
    "PTSana-Regular": require("../assets/fonts/PTSansRegular.ttf")
  });



  return (
    <LanguageProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </LanguageProvider>
  );
}


export default App;
