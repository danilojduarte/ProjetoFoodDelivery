import { FlatList, Image, Text, View, Alert } from "react-native";
import { styles } from "./busca.style.js";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import icons from "../../constants/icons.js";
import api from "../../constants/api.js";
import { useState, useEffect } from "react";

function Busca(props) {
    const busca = props.route.params.busca;
    const id_categoria = props.route.params.id_categoria;
    const id_banner = props.route.params.id_banner;
    const [restaurantes, setRestaurantes] = useState([]);

    function restaurante () {

    }

    function OpenCardapio(id) {
        props.navigation.navigate("cardapio", {
            id_empresa: id
        });
    }

    async function RemoveFavorito(id) {
        try {
            const response = await api.delete("/empresas/" + id + "/favoritos");
            if (response.data) {
                LoadSearch();
            }
        } catch (error) {
            handleError(error);
        }
    }

    async function AddFavorito(id) {
        try {
            const response = await api.post("/empresas/" + id + "/favoritos");
            if (response.data) {
                LoadSearch();

            }
        } catch (error) {
            handleError(error);
        }
    }

    async function LoadSearch() {
            try {
                const response = await api.get("/empresas", {
                    params:{
                        busca: busca,
                        id_categoria: id_categoria,
                        id_banner: id_banner
                    }
                });
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

        useEffect(() => {
            LoadSearch();
        }, []);


    return <View style={styles.container}>
        <FlatList data={restaurantes}
            keyExtractor={(restaurante) => restaurante.id_empresa}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Restaurante id_empresa={item.id_empresa}
                    logotipo={item.icone}
                    nome={item.nome}
                    endereco={item.endereco}
                    icone={item.favorito == "S" ? icons.favoritoFull : icons.favorito}
                    onPress={OpenCardapio}
                    onClickIcon={item.favorito == "S" ? RemoveFavorito : AddFavorito}
                />
            }}

            contentContainerStyle={styles.containerList}

            ListEmptyComponent={() => {
                return <View style={styles.empty}>
                    <Image source={icons.empty} />
                    <Text style={styles.emptyText}>Nenhum item encontrado</Text>
                </View>
            }}
        />
    </View>
}

export default Busca;