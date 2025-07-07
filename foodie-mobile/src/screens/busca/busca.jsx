import { FlatList, Image, Text, View, Alert } from "react-native";
import { styles } from "./busca.style.js";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import icons from "../../constants/icons.js";
import api from "../../constants/api.js";

function Busca(props) {
    const busca = props.route.params.busca;
    const [restaurantes, setRestaurantes] = useState([]);

    function restaurante () {

    }

    function OpenCardapio() {

    }

    function AddFavorito() {

    }

    async function LoadSearch() {
            try {
                const response = await api.get("/empresas", {
                    params:{
                        busca: busca
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

    return <View style={styles.container}>
        <FlatList data={restaurantes}
            keyExtractor={(restaurante) => restaurante.id}
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