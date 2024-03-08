import { Text, View, StyleSheet, Image } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import Rotas from "../components/Rotas";

export default function About() {
  //Variável que permite que você navegue entre as telas
  const navigation = useNavigation();

  const imagem = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvUP0eZQkYRyfLZ3XfH8nWN-880jbLF8fUZAoAH_b4fg&s",
  };

  return (
    <View>
      <Image source={imagem} resizeMode="cover" style={styles.about}/>
        <Text>Exemplo de página About</Text>
      <Rotas />
    </View>
  );
}
