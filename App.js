import { StyleSheet, View } from "react-native";
import { NavigationContainer,} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Pages/Login";
import ComponentHome from "./src/Pages/Home";
import About from "./src/Pages/About";
import ComponentContact from "./src/Pages/Contact";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ComponentHome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Contact" component={ComponentContact} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
