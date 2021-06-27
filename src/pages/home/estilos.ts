import { Dimensions, StyleSheet } from "react-native";
import { cores } from "../../estilos";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cores.grey11,
  },

  logo: {
    alignItems: "center",
    justifyContent: "flex-start",

    marginBottom: 50,
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  logoImpacta: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    backgroundColor: cores.grey11,
    width: Dimensions.get("window").width,
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
