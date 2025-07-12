import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./pedido.style.js";

function Pedido(props) {

    const dt = new Date(props.dt_pedido);

    return <TouchableOpacity style={styles.pedido} onPress={() => props.onClickPedido(props.id_pedido)}>
        <Image source={{ uri: props.logotipo }} style={styles.logotipo} />

        <View style={styles.textos}>
            <Text style={styles.nome}>{props.nome}</Text>

            <View style={styles.containerValor}>
                <Text style={styles.valor}>
                    {
                        new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(props.valor)
                    }
                </Text>
                <Text style={styles.valor}>{dt.toLocaleDateString()}</Text>
            </View>
            <Text style={styles.valor}>Pedido: {props.id_pedido}</Text>
            <Text style={{ color: props.color }}>{props.status}</Text>
        </View>

    </TouchableOpacity>
}

export default Pedido;