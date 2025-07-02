import { Image, TouchableOpacity, View, Text, FlatList } from "react-native";
import { styles } from "./pedido-detalhe.style.js";
import icons from "../../constants/icons.js";
import { pedido } from "../../constants/dados.js";
import Produto from "../../components/produto/produto.jsx";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

function DetalhePedido(props) {

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

        <FlatList
            data={pedido.itens}
            keyExtractor={(item) => item.idItem}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Produto
                    key={item.idItem}
                    foto={item.foto}
                    nome={item.nome}
                    descricao={item.descricao}
                    valor={item.vlTotal}
                />
            }}
        />

        <View>
            <View style={styles.valores}>
                <Text style={styles.total}>Resumo dos Valores</Text>
            </View>

            <View style={styles.valores}>
                <Text style={styles.valor}>Subtotal</Text>
                <Text style={styles.valor}>R$ 66,00</Text>
            </View>

            <View style={styles.valores}>
                <Text style={styles.valor}>Taxa de entrega</Text>
                <Text style={styles.valor}>R$ 5,00</Text>
            </View>

            <View style={styles.valores}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>R$ 71,00</Text>
            </View>
        </View>

    </View>
}

export default DetalhePedido;
