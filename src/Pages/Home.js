import { useNavigation,  } from "@react-navigation/native";
import { View } from "react-native-web";
import { styles } from "../styles/Estilos";
import LoginButton from "../Components/LoginButton";

const Stack = createNativeStackNavigator();

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Hello! This is my new project</Text>
      <LoginButton/>
    </View>
  );
}
