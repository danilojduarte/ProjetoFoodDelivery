import { FlatList, Image, Text, View } from "react-native";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import icons from "../../constants/icons.js";
import { styles } from "./aba-favoritos.style.js";

function AbaFavoritos() {

    const [restaurantes, setRestaurantes] = useState([]);


    return <View style={styles.container}>
        <FlatList data={restaurantes}
            keyExtractor={(restaurante) => restaurante.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Restaurante nome={item.nome}
                    endereco={item.endereco}
                    logotipo={item.logotipo}
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