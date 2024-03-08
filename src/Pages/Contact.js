import { View, TextInput } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import Rotas from "../components/Rotas";
export default function ComponentContact() {
  const navigation = useNavigation();

  return (
    <View>
      {/* Caixa  nome */}
      <TextInput style={styles.inputname} placeholder="Nome" inputMode="text" />

      {/*Caixa de email*/}
      <TextInput
        style={styles.inputname}
        placeholder="E-mail"
        inputMode="text"
      />

      {/*Caixa de mensagem do usuario*/}
      <TextInput
        style={styles.inputname}
        placeholder="Mensagem"
        inputMode="text"
      />
      <Rotas />
    </View>
  );
}
