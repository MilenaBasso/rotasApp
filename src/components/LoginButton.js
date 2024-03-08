import { View, Button, Pressable } from "react-native";
import { styles } from "../styles/StyleSheet";
import { TouchableOpacity } from "react-native-web";

export default function ButtonLogin() {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        style={style.btn}
        onPress={() => console.log("You pressed the button.")}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>

      <Pressable
      style={style.btn}
        onPress={() => console.log("You pressed the button.")}
      >
        <Text>Press Here</Text>
      </Pressable> */}

      <Button
        title="Efetuar Login"
        onPress={() => {
          alert("Login Efetuado");
        }}
        color="red"
      />
    </View>
  );
}
