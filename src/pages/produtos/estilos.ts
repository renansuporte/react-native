import { StyleSheet } from "react-native";
import { cores } from "../../estilos";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: cores.grey11,
  },
  nome: {
    fontFamily: "Roboto",
    color: cores.laranja,
    fontWeight: "bold",
    fontSize: 20,
  },
  informacao: {},
  preco: {
    color: cores.azul,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
  divisor: {
    marginHorizontal: 24,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: cores.azul,
  },

  descricao: {
    color: cores.azul,
    fontSize: 17,
    marginRight: 8,
  },
  exitButton: {
    marginRight: 20,
  },
});
