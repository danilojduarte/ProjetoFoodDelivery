import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  restaurante: {
    flexDirection: "row",
    alignItems: "center",  // 🟢 Garante alinhamento vertical correto
    padding: 8,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: COLORS.white, // Opcional: se quiser fundo branco
    borderRadius: 8, // Opcional: bordas arredondadas
    shadowColor: "#000", // Opcional: sombra para destacar
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra Android
  },
  touchArea: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  logotipo: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  textos: {
    flex: 1,
    paddingHorizontal: 8,
  },
  nome: {
    color: COLORS.dark_gray,
    marginBottom: 3,
    fontSize: FONT_SIZE.sm,
    fontWeight: "bold", // 🟢 Destaca o nome
  },
  endereco: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  },
  favoritoContainer: {
    padding: 8,
  },
  favorito: {
    width: 30,
    height: 30,
  },
};
