import { View, Button } from "react-native";
import { styles } from "../styles/Estilos";

const Stack = createNativeStackNavigator();

export default function LoginButton() {
  return (
    <View style={styles.container}>
      <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
    </View>
  );
}
