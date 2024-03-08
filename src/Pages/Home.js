import { Text, View, StyleSheet, ImageBackground, Button } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import Rotas from "../components/Rotas";

export default function ComponentHome() {
  const Fundo = {
    //no image yet//
  };

  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground source={Fundo} resizeMode="cover" style={styles.home}>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
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
