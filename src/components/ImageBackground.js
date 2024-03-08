import { ImageBackground } from "react-native";
import { styles } from "../styles/StyleSheet";
import Imagem from "./LoginImage";
import Text from "./LoginText";
import Input from "./LoginInput";
import Button from "./LoginButton";

export default function ImagBack({children}) {
  return (
    <ImageBackground
      source={require("../assets/images/fundo.jpg")}
      style={styles.fundologin}
    >
      {children}
    </ImageBackground>
  );
}
