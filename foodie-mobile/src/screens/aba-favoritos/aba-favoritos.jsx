import { useState } from "react";
import { Alert, FlatList, Image, Text, View } from "react-native";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import icons from "../../constants/icons.js";
import { styles } from "./aba-favoritos.style.js";
import api from "../../constants/api.js";

function AbaFavoritos() {

    const [restaurantes, setRestaurantes] = useState([]);

     async function LoadFavoritos() {
    
            try {
                const response = await api.get("/usuarios/favoritos");
                    
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

        useEffect(() => {
            LoadFavoritos();
        }, []);


    return <View style={styles.container}>
        <FlatList data={restaurantes}
            keyExtractor={(restaurante) => restaurante.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Restaurante nome={item.nome}
                    endereco={item.endereco}
                    logotipo={item.icone}
                    icone={icons.remove} />
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