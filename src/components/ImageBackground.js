import { ImageBackground } from "react-native";
import { styles } from "../styles/StyleSheet";
import Imagem from "./LoginImage";
import Text from "./LoginText";
import Input from "./LoginInput";
import Button from "./LoginButton";

export default function ImagBack() {
  return (
    <ImageBackground
      source={require("../assets/images/fundo.jpg")}
      style={styles.fundologin}
    >
      <Imagem />
      <Text />
      <Input />
      <Button />
    </ImageBackground>
  );
}
