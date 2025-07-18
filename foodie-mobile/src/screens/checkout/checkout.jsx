import { Image, TouchableOpacity, View, Text, FlatList } from "react-native";
import { styles } from "./checkout.style.js";
import icons from "../../constants/icons.js";
import Produto from "../../components/produto/produto.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function Checkout(props) {

    const [pedido, setPedido] = useState({});

    function ClickDelete() {
        alert("OK");
    }

    return <View style={styles.container}>

        <FlatList data={pedido.itens}
            keyExtractor={(item) => item.id_produto.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Produto key={item.id_produto}
                    id_produto={item.id_produto}
                    foto={item.icone}
                    nome={item.nome}
                    descricao={item.descricao}
                    valor={item.vl_produto}
                    onClick={ClickDelete}
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

        <View style={styles.conatinerBtn}>
            <Button texto="Finalizar Pedido" />
        </View>

    </View>
}

export default Checkout;