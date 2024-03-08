import { View } from "react-native";
import { styles } from "../styles/StyleSheet";
import ImagBack from "../components/ImageBackground";
import Rotas from "../components/Rotas";
import Imagem from "../components/LoginImage";
import InputLogin from "../components/LoginInput";
import ButtonLogin from "../components/LoginButton";

export default function Login() {
  return (
    <View style={styles.container}>
      <ImagBack>
        <Imagem />
        <InputLogin />
        <ButtonLogin />
      </ImagBack>
      <Rotas />
    </View>
  );
}
