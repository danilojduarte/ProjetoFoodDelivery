import { FlatList, Image, Text, View, Alert } from "react-native";
import icons from "../../constants/icons.js";
import { styles } from "./aba-pedidos.style.js";
import Pedido from "../../components/pedido/pedido.jsx";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";


function AbaPedidos(props) {

    const [pedidos, setPedidos] = useState([]);

    function DetalhePedido() {
        props.navigation.navigate("detalhe-pedido");
    }

    async function LoadPedido() {
        try {
            const response = await api.get("/pedidos");
            if (response.data) {
                setPedidos(response.data);
            }
        } catch (error) {
                if (error.response?.data.error)
                    Alert.alert(error.response.data.error);
                else
                    Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    useEffect(() => {
        LoadPedido();
    }, [])

    return <View style={styles.container}>
        <FlatList data={pedidos}
            keyExtractor={(ped) => ped.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Pedido logotipo={item.logotipo}
                    nome={item.nome}
                    valor={item.vl_total}
                    dt_pedido={item.dt_pedido}
                    status={item.status}
                    onClickPedido={DetalhePedido} />
            }}

            contentContainerStyle={styles.containerList}

            ListEmptyComponent={() => {
                return <View style={styles.empty}>
                    <Image source={icons.empty} />
                    <Text style={styles.emptyText}>Nenhum pedido encontrado</Text>
                </View>
            }}
        />
    </View>
}

export default AbaPedidos;