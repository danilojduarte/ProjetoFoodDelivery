import { useState, useEffect } from "react";
import { Alert, FlatList, Image, Text, View } from "react-native";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import icons from "../../constants/icons.js";
import { styles } from "./aba-favoritos.style.js";
import api from "../../constants/api.js";

function AbaFavoritos(props) {

    const [restaurantes, setRestaurantes] = useState([]);

    async function LoadFavoritos() {

        try {
            const response = await api.get("/usuarios/favoritos");

            if (response.data) {
                setRestaurantes(response.data);
            }
        } catch (error) {
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
                LoadFavoritos();
            }
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    function OpenCardapio(id) {
        props.navigation.navigate("cardapio", {
            id_empresa: id
        });
    }

    useEffect(() => {
        LoadFavoritos();
    }, []);

    return <View style={styles.container}>
        <FlatList data={restaurantes}
            keyExtractor={(restaurante) => restaurante.id_empresa.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Restaurante id_empresa={item.id_empresa}
                    nome={item.nome}
                    endereco={item.endereco}
                    logotipo={item.icone}
                    icone={icons.remove}
                    onPress={OpenCardapio}
                    onClickIcon={RemoveFavorito}
                />
            }}

            contentContainerStyle={styles.containerList}

            ListEmptyComponent={() => {
                return <View style={styles.empty}>
                    <Image source={icons.empty} />
                    <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
                </View>
            }}
        />
    </View>
}

export default AbaFavoritos;