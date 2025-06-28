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
    headerTextos: {
        flex: 1
    },
    nome: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2
    },
    descricao: {
        fontSize: FONT_SIZE.md,
        color: COLORS.medium_gray
    },
    valor: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2,
        marginTop: 15
    },
    headerObs: {
        width: "100%",
        padding: 10
    },
    multiline: {
        flex: 1,
        backgroundColor: COLORS.light_gray,
        padding: 10,
        color: COLORS.dark_gray,
        borderRadius: 4,

        borderWidth: 1,
        borderColor: COLORS.gray,

        minHeight: 120,
        textAlignVertical: "top"
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        padding: 10,
        alignItems: "center"
    },
    imgQtd: {
        height: 40,
        width: 40
    },
    qtd: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.dark_gray,
        width: 35,
        fontWeight: "bold",
        textAlign: "center"
    },
    footerBtn: {
        flex: 1,
        marginRight: 5,
        marginLeft: 15
    }
}