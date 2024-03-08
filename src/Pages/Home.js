import { Text, View, StyleSheet, ImageBackground, Button } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import Rotas from "../components/Rotas";

export default function ComponentHome() {
  const Fundo = {
    uri: "https://img.freepik.com/fotos-gratis/fundo-preto-abstrato-da-grade-digital_53876-97647.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709769600&semt=ais",
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
          HOMEPAGE
        </Text>
        <Rotas />
      </ImageBackground>
    </View>
  );
}
