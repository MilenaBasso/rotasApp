import { View, Button } from "react-native";
import { styles } from "../styles/Estilos";


const Stack = createNativeStackNavigator();

export default function LoginButton() {
 return (
    <View style={styles.container}>
      <Text>Hello! This is my new project</Text>
      <Button title="Sobre" onPress={() => navigation.navigate ("Sobre")} />
    </View>
  );
}
