import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Home from "./src/Pages/Home";
import About from "./src/Pages/About";


//IMPORT STACK NAVIGATION
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//CREATE A STACK NAVIGATOR INSTANCE
// it allow us to use comands to define app navigation
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View>
      <Home/>
      <About/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>

    </View>
  );
}
