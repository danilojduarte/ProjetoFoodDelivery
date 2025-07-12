import { View, Text, FlatList, Alert } from "react-native";
import { styles } from "./pedido-detalhe.style.js";
import Produto from "../../components/produto/produto.jsx";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import api from "../../constants/api.js";

function DetalhePedido(props) {

    const id_pedido = props.route.params.id_pedido;
    const [pedido, setPedido] = useState({});

    async function LoadPedido() {

            try {
                const response = await api.get("/pedidos/" + id_pedido);

                if (response.data) {
                    setPedido(response.data);
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

    // Exemplo de função para buscar pedidos no futuro
    function LoadPedidos() {
        console.log("Tela Pedidos focada — aqui você poderia carregar pedidos da API");
        // Exemplo: await api.get('/pedidos')...
    }

    useFocusEffect(
        useCallback(() => {
            LoadPedidos();
        }, [])
    );

    

    return <View style={styles.container}>

        <View style={styles.containerPedido}>
            <Text style={styles.textPedido}>Pedido: {id_pedido}</Text>
        </View>

        <FlatList
            data={pedido.itens}
            keyExtractor={(item) => item.idItem}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Produto
                    // key={item.idItem}
                    foto={item.icone}
                    nome={item.nome}
                    qtd={item.qtd}
                    descricao={item.descricao}
                    valor={item.vl_total}
                />
            }}
        />

        <View>
            <View style={styles.valores}>
                <Text style={styles.total}>Resumo dos Valores</Text>
            </View>

            <View style={styles.valores}>
                <Text style={styles.valor}>Subtotal</Text>
                <Text style={styles.valor}>{
                new Intl.NumberFormat("pt-BR",
                    { style: "currency", currency: "BRL" }).format(pedido.vl_subtotal)
                }</Text>
            </View>

            <View style={styles.valores}>
                <Text style={styles.valor}>Taxa de entrega</Text>
                <Text style={styles.valor}>{
                new Intl.NumberFormat("pt-BR",
                    { style: "currency", currency: "BRL" }).format(pedido.vl_taxa_entrega)
                }</Text>
            </View>

            <View style={styles.valores}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.valor}>{
                new Intl.NumberFormat("pt-BR",
                    { style: "currency", currency: "BRL" }).format(pedido.vl_total)
                }</Text>
            </View>
        </View>

    </View>
}

export default DetalhePedido;
