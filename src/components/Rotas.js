import React from "react-native";
import { View, Button } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";

export default function Rotas() {
  const navigation = useNavigation();

  return (
    <View style={styles.containeButtons}>
      <View style={styles.rotas}>
        <Button
          title="Home"
          onPress={() => navigation.navigate("Home")}
          color={"pink"}
        />
        <Button
          title="About"
          onPress={() => navigation.navigate("About")}
          color={"purple"}
        />
        <Button
          title="Contact"
          onPress={() => navigation.navigate("Contact")}
          color={"pink"}
        />
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")}
          color={"purple"}
        />
      </View>
    </View>
  );
}