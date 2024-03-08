import { ImageBackground } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function ImagBack({ children }) {
  return (
    <ImageBackground
      source={require("../assets/images/fundo.jpg")}
      style={styles.fundologin}
    >
      {children}
    </ImageBackground>
  );
}
