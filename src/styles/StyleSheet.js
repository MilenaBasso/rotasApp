import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logintext: {
    color: "black",
    fontSize: '30',
  },

  inputname: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    width: 230,
    fontSize: 20,
  },

});import { StyleSheet } from "react-native";

{
  /* /EDIÇÃO DOS CAMPOS */
}
export const Styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  // Editar a Fundo
  fundo: {
    height: 300,
    width: 300,
    resizeMode: "cover",
    source: "imagem",
  },
 //página about
  about: {
    height: 300,
    width: 300,
    borderRadius: 300,
    resizeMode: "cover",
    source: "imagem",
  },

  // Editar a Imagem
  fundologin: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  home: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 500,
  },

  // Editar o Text
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    borderStyle: "solid",
  },

  // Editar o Input E-mail
  email: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    borderStyle: "solid",
  },

  // Editar o Input Senha
  senha: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    borderStyle: "solid",
  },
});