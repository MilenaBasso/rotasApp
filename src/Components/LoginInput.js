import { TextInput, View } from "react-native";
import { styles } from "../styles/StyleSheet";
export default function InputLogin() {
  return (
    <View style={styles.input}>
      <TextInput placeholder="Digite Seu E-mail" style={styles.email} />
      <TextInput
        placeholder="Digite Sua Senha"
        style={styles.senha}
        secureTextEntry={true}
      />
    </View>
  );
}
