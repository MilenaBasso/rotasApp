import { TextInput, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function InputLogin() {
  return (
    <View style={styles.inputname}>
      <TextInput placeholder="Digite Seu E-mail" />
      <TextInput placeholder="Digite Sua Senha" secureTextEntry={true} />
    </View>
  );
}
