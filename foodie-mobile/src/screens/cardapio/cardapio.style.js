import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    containerFoto: {
        alignItems: "center"
    },
    foto: {
        height: 150
    },
    containerBack: {
        position: "absolute",
        top: 30,
        left: 15
    },
    back: {
        width: 40,
        height: 40
    },
    header: {
        width: "100%",
        flexDirection: "row",
        padding: 10
    },
    favorito: {
        height: 40,
        width: 40
    },
    headerTextos: {
        flex: 1
    },
    nome: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2
    },
    taxa: {
        fontSize: FONT_SIZE.md,
        color: COLORS.medium_gray
    },
    location: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    locationImg: {
        width: 40,
        height: 40,
        margin: 10
    },
    endereco: {
        flex: 1,
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray
    },
    containerProduto: {
        padding: 10
    },
    categoria: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        padding: 2
    }
}