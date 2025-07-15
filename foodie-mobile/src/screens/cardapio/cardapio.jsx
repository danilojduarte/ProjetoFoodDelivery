import { Image, TouchableOpacity, View, Text, ScrollView, Alert } from "react-native";
import { styles } from "./cardapio.style.js";
import icons from "../../constants/icons.js";
import Produto from "../../components/produto/produto.jsx";
import { useEffect, useState } from "react";
import api from  "../../constants/api.js";

function Cardapio(props) {

    var categoriaAnterior = "";
    const id_empresa = props.route.params.id_empresa;
    const [cardapio, setCardapio] = useState({ itens: [] });
    const [favorito, setFavorito] = useState("N");

    async function LoadCardapio(id) {

        try {
            const response = await api.get("/empresas/" + id + "/cardapio");
            if (response.data) {
                setCardapio(response.data);
                setFavorito(response.data.favorito);
            }

        } catch (error) {
            console.log(error);
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    async function RemoveFavorito(id) {

        try {
            const response = await api.delete("/empresas/" + id + "/favoritos");

            if (response.data) {
                setFavorito("N");
            }
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    async function AddFavorito(id) {

        try {
            const response = await api.post("/empresas/" + id + "/favoritos");

            if (response.data) {
                setFavorito("S");
            }
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    function ClickFavorito() {
        favorito == "S" ? RemoveFavorito(id_empresa) : AddFavorito(id_empresa);
    }

    function ClickProduto(id) {
        props.navigation.navigate("detalhe-produto", {
            id_produto: id,
            id_empresa: id_empresa
        });
    }

    useEffect(() => {
        LoadCardapio(id_empresa);
    }, []);

    return <View style={styles.container}>
        <View style={styles.containerFoto}>
            <Image source={{ uri: cardapio.foto }} style={styles.foto}
                resizeMode="cover" />

            <TouchableOpacity style={styles.containerBack}
                onPress={props.navigation.goBack}>
                <Image source={icons.back2} style={styles.back} />
            </TouchableOpacity>
        </View>

        <View style={styles.header}>
            <View style={styles.headerTextos}>
                <Text style={styles.nome}>{cardapio.nome}</Text>
                <Text style={styles.taxa}>Taxa de entrega: {
                    new Intl.NumberFormat("pt-BR",
                        { style: "currency", currency: "BRL" }).format(cardapio.vl_taxa_entrega)
                } </Text>
            </View>

            <TouchableOpacity onPress={ClickFavorito}>
                <Image source={favorito == "S" ? icons.favoritoFull : icons.favorito}
                    style={styles.favorito} />
            </TouchableOpacity>
        </View>

        <ScrollView>

            <View style={styles.location}>
                <Image source={icons.location} style={styles.locationImg} />
                <Text style={styles.endereco}>
                    {cardapio.endereco} - {cardapio.bairro} - {cardapio.cidade} -
                    {cardapio.uf}
                </Text>
            </View>

            {
                cardapio.itens.map((item) => {
                    return <View key={item.id_produto} style={styles.containerProduto}>

                        {
                            categoriaAnterior != item.categoria ?
                                <Text style={styles.categoria}>{item.categoria}</Text>
                                : null
                        }

                        <Produto key={item.id_produto}
                            id_produto={item.id_produto}
                            foto={item.icone}
                            nome={item.nome}
                            descricao={item.descricao}
                            valor={item.vl_produto}
                            onClick={ClickProduto}
                        />

                        {categoriaAnterior = item.categoria}

                    </View>
                })
            }

        </ScrollView>

    </View>
}

export default Cardapio;