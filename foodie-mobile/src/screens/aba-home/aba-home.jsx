import { Alert, Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./aba-home.style.js";
import icons from "../../constants/icons.js";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import { useEffect, useState, useCallback } from "react";
import Categorias from "../../components/categorias/categorias.jsx";
import Banners from "../../components/banners/banners.jsx";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import api from "../../constants/api.js";
import { useFocusEffect } from "@react-navigation/native";

function AbaHome(props) {

    const [busca, setBusca] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [banners, setBanner] = useState([]);
    const [restaurantes, setRestaurantes] = useState([]);

    async function LoadCategory() {
        try {
            const response = await api.get("/categorias");
            if (response.data) {
                setCategorias(response.data);
            }
        } catch (error) {
            handleError(error);
        }
    }

    async function LoadBanner() {
        try {
            const response = await api.get("/banners");
            if (response.data) {
                setBanner(response.data);
            }
        } catch (error) {
            handleError(error);
        }
    }

    async function LoadDestaque() {
        try {
            const response = await api.get("/empresas/destaques");
            if (response.data) {
                setRestaurantes(response.data);
            }
        } catch (error) {
            handleError(error);
        }
    }

    function handleError(error) {
        if (error.response?.data.error)
            Alert.alert(error.response.data.error);
        else
            Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
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
                LoadDestaque();
            }
        } catch (error) {
            handleError(error);
        }
    }

    async function AddFavorito(id) {
        try {
            const response = await api.post("/empresas/" + id + "/favoritos");
            if (response.data) {
                LoadDestaque();
            }
        } catch (error) {
            handleError(error);
        }
    }

    function Search(termo) {
        console.log("Busca por: " + termo);
    }

    useEffect(() => {
        LoadCategory();
        LoadBanner();
        LoadDestaque();
    }, []);

    // 💡 Aqui adicionamos as funções para recarregar ao focar
    useFocusEffect(
        useCallback(() => {
            console.log("Aba Home focada — recarregando dados");
            LoadCategory();
            LoadBanner();
            LoadDestaque();
        }, [])
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerBar}>
                <Image source={icons.logo2} style={styles.logo} />
                <TouchableOpacity onPress={() => props.navigation.navigate("checkout")}>
                    <Image source={icons.cart} style={styles.cart} />
                </TouchableOpacity>
            </View>

            <View style={styles.busca}>
                <TextBox
                    placeholder="O que vamos pedir hoje?"
                    onChangeText={(texto) => setBusca(texto)}
                    value={busca}
                    returnKeyType="search"
                    onSubmit={Search}
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Categorias dados={categorias} />
                <Banners dados={banners} />

                <View>
                    <Text style={styles.destaques}>Destaques</Text>
                </View>

                {restaurantes.map((restaurante, index) => {
                    return (
                        <View key={index}>
                            <Restaurante
                                id_empresa={restaurante.id_empresa}
                                logotipo={restaurante.icone}
                                nome={restaurante.nome}
                                endereco={restaurante.endereco}
                                icone={restaurante.favorito == "S" ? icons.favoritoFull : icons.favorito}
                                onPress={OpenCardapio}
                                onClickIcon={restaurante.favorito == "S" ? RemoveFavorito : AddFavorito}
                            />
                        </View>
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default AbaHome;
