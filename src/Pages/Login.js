import { View } from "react-native";
import { styles } from "../styles/StyleSheet";
import ImagBack from "../components/ImageBackground";
import Rotas from "../components/Rotas";
import Imagem from "../components/LoginImage";
import InputLogin from "../components/LoginInput";
import ButtonLogin from "../components/LoginButton";
import TextLogin from "../components/LoginText";

export default function Login() {
  return (
    <View style={{ flex: 1 }}>
      <ImagBack>
      <Imagem />
      <InputLogin />
      <ButtonLogin />
      <TextLogin/>

      </ImagBack>
      <Rotas />
    </View>
  );
}
