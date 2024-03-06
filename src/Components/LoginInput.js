import { View, TextInput } from "react-native";
import { styles } from "../styles/Estilos";

export default function LoginInput() {
  return (
    <View>
      {/* Caixa do nome */}
      <TextInput style={styles.inputname} placeholder="Nome" inputMode="text" />
      {/*Caixa do email*/}
      <TextInput
        style={styles.inputname}
        placeholder="E-mail"
        inputMode="text"
      />
      {/*Caixa da mensagem do usuario*/}
      <TextInput
        style={styles.inputname}
        placeholder="Mensagem"
        inputMode="text"
      />
    </View>
  );
}
