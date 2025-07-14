import { Image, TouchableOpacity, View, Text, ScrollView, Alert } from "react-native";
import { styles } from "./cardapio.style.js";
import icons from "../../constants/icons.js";
import Produto from "../../components/produto/produto.jsx";
import { useEffect, useState } from "react";
import api from  "../../constants/api.js";

function Cardapio(props) {

    const id_empresa = props.route.params.id_empresa;
    const [cardapio, setCardapio] = useState({});


    async function LoadCardapio(id) {
        try {
            const response = await api.get("/empresas/" + id + "/cardapio");

            if (response.data) {
                setCardapio(response.data);
            }
        } catch (error) {
            if (error.response?.data.error)
                    Alert.alert(error.response.data.error);
                else
                    Alert.alert("Ocorreu um erro. Tente novamente mais tarde")
        }
    }

    useEffect(() => {
        LoadCardapio(id_empresa);
    }, []);

    return <View style={styles.container}>
        <View style={styles.containerFoto}>
            <Image source={{ uri: cardapio.foto }} style={styles.foto} resizeMode="contain" />

            <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
                <Image source={icons.back2} style={styles.back} />
            </TouchableOpacity>
        </View>

        <View style={styles.header}>
            <View style={styles.headerTextos}>
                <Text style={styles.nome}>Nome do estabelecimento</Text>
                <Text style={styles.taxa}>Taxa de entrega: R$ 5,00</Text>
            </View>

            <Image source={icons.favoritoFull} style={styles.favorito} />
        </View>

        <ScrollView>

            <View style={styles.location}>
                <Image source={icons.location} style={styles.locationImg} />
                <Text style={styles.endereco}>Avenida Brigadeiro Luis Antonio, 1250 - CJ 1651</Text>
            </View>

            {
                
                cardapio.itens.map((item) => {
                    return <View key={item.idCategoria} style={styles.containerProduto}>
                        <Text style={styles.categoria}>{item.categoria}</Text>

                        {
                            /*
                            item.itens.map((prod) => {
                                return <Produto key={prod.idProduto}
                                    idProduto={prod.idProduto}
                                    foto={prod.foto}
                                    nome={prod.nome}
                                    descricao={prod.descricao}
                                    valor={prod.valor}
                                />
                            })
                            */
                        }

                    </View>
                })

            }

        </ScrollView>

    </View>
}

export default Cardapio;