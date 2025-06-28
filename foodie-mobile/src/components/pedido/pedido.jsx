import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./pedido.style.js";

function Pedido(props) {
    return <TouchableOpacity style={styles.pedido} onPress={() => props.onClickPedido()}>
        <Image source={props.logotipo} style={styles.logotipo} />

        <View style={styles.textos}>
            <Text style={styles.nome}>{props.nome}</Text>

            <View style={styles.containerValor}>
                <Text style={styles.valor}>
                    {
                        new Intl.NumberFormat("", { style: "currency", currency: "BRL" }).format(props.valor)
                    }
                </Text>
                <Text style={styles.valor}>{props.dt_pedido}</Text>
            </View>
            <Text style={styles.status}>{props.status}</Text>
        </View>

    </TouchableOpacity>
}

export default Pedido;