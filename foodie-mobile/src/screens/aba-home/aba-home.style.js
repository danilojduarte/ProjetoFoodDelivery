import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // Realizada alteração aqui,
    paddingHorizontal: 12,
    paddingTop: 12,
    },
    headerBar: {
        height: 45,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logo: {
        width: 140,
        height: 42,
    },
    cart: {
        width: 30,
        height: 30
    },
    busca: {
        marginBottom: 10
    },
    destaques:{
        color: COLORS.dark_gray,
        fontWeight: "bold",
        marginTop: 10,
    }
}