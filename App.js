import { StyleSheet, View } from "react-native";
import { NavigationContainer,} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login";
import ComponentHome from "./src/pages/Home";
import About from "./src/pages/About";
import ComponentContact from "./src/pages/Contact";

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
