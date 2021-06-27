import { Dimensions, StyleSheet } from "react-native";
import { cores } from "../../estilos";

export default StyleSheet.create({
  ajusteTela: {
    flex: 1,
    backgroundColor: cores.grey11,
  },
  container: {
    padding: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cores.grey11,
  },
  buttonPrimary: {
    width: Dimensions.get("window").width - 34,
    backgroundColor: cores.primary,
    borderRadius: 2,
    paddingBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  buttonDanger: {
    width: Dimensions.get("window").width - 34,
    borderRadius: 2,
    paddingBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "rgb(200, 35, 51)",
  },
  buttonLink: {
    width: Dimensions.get("window").width - 34,
    borderRadius: 2,
    paddingBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "rgba(0, 123, 255, 0.3)",
  },

  label: {
    borderColor: cores.roxo,
    fontSize: 18,
    color: cores.branco,
    fontWeight: "bold",
    alignSelf: "center",
  },
  labelLink: {
    color: cores.branco,
  },
});
