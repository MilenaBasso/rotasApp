import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  home: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    padding: 500,
  },

  about: {
    height: 300,
    width: 300,
    borderRadius: 300,
    resizeMode: "cover",
    source: "imagem",
  },

  logintext: {
    color: "black",
    fontSize: "30",
  },

  //editar input em contacts
  inputname: {
    backgroundColor: "pink",
    borderColor: "red",
    borderWidth: 2,
    width: 300,
    fontSize: 20,
    marginTop: 100,
    alignItems: 'center',
  },

  //
  imagemlogin: {
    width: 70,
    height: 70,
  },

  // Editar a Fundo
  fundo: {
    height: "100%",
    width: "100%",
    // resizeMode: "cover",
    source: "imagem",
  },

  // Editar imagem de fundo
  fundologin: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  // Editar o Text
  text: {
    textAlign: "center",
    color: "purple",
    fontSize: 30,
    borderStyle: "solid",
  },

  //estilizar os botoes na pagina de login
  rotas: {
    justifyContent: "center",
  },
});
