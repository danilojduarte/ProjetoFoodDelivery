import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./aba-home.style.js";
import icons from "../../constants/icons.js";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import { useEffect, useState } from "react";
import Categorias from "../../components/categorias/categorias.jsx";
import Banners from "../../components/banners/banners.jsx";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import api from "../../constants/api.js";
import { LoadUsuario } from "../../storage/storage.usuario.js";

function AbaHome(props) {

    async function LoadCategory() {

        try {
            const response = await api.get("/categorias");
                
            if (response.data) {
                setCategorias(response.data);
            }
        } catch (error) {
            setLoading(false);
            await SaveUsuario({});
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    async function LoadBanner() {

        try {
            const response = await api.get("/banners");
                
            if (response.data) {
                setBanner(response.data);
            }
        } catch (error) {
            setLoading(false);
            await SaveUsuario({});
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    async function LoadDestaque() {

        try {
            const response = await api.get("/empresas/destaques");
                
            if (response.data) {
                setRestaurantes(response.data);
            }
        } catch (error) {
            setLoading(false);
            await SaveUsuario({});
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    function OpenCardapio() {
        props.navigation.navigate("cardapio");
    }

    const [busca, setBusca] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [banners, setBanner] = useState([]);
    const [restaurantes, setRestaurantes] = useState([]);

    useEffect(() => {
        LoadCategory();
        LoadBanner();
        LoadDestaque();
    }, []);

    return <SafeAreaView style={styles.container}>
        <View style={styles.headerBar}>
            <Image source={icons.logo} style={styles.logo} />

            <TouchableOpacity onPress={() => props.navigation.navigate("checkout")}>
                <Image source={icons.cart} style={styles.cart} />
            </TouchableOpacity>
        </View>

        <View style={styles.busca}>
            <TextBox placeholder="O que vamos pedir hoje?"
                onChangeText={(texto) => setBusca(texto)}
                value={busca} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

            <Categorias dados={categorias} />

            <Banners dados={banners} />

            <View>
                <Text style={styles.destaques}>Destaques</Text>
            </View>

            {
                restaurantes.map((restaurante, index) => {
                    return <View key={index}>
                        <Restaurante logotipo={restaurante.icone}
                            nome={restaurante.nome}
                            endereco={restaurante.endereco}
                            icone={restaurante.favorito == "S" ? icons.favoritoFull : icons.favorito}
                            onPress={OpenCardapio} />
                    </View>
                })
            }

        </ScrollView>

    </SafeAreaView>
}

export default AbaHome;