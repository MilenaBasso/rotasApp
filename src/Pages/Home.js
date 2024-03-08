import { Text, View, StyleSheet, ImageBackground, Button } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import Rotas from "../components/Rotas";

export default function ComponentHome() {
  const Fundo = {
    uri: "https://www.creativefabrica.com/wp-content/uploads/2022/03/04/simple-blue-flower-seamless-pattern-Graphics-26444349-1-580x387.jpg",
  };

  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground source={Fundo} resizeMode="cover" style={styles.home}>
        <Text
          style={{
            fontWeight: "bold",
            color: "red",
            fontSize: 65,
            textAlign: "center",
          }}
        >
          Welcome!!
        </Text>
        <Rotas />
      </ImageBackground>
    </View>
  );
}
