import { View, Image } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Imagem({ source }) {
  return (
    <View style={styles.imagem}>
      <Image
        source={require("../assets/images/loginimg.jpg")}
        style={styles.imagemlogin}
      />
    </View>
  );
}
