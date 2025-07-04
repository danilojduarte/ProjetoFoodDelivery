import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./busca.style.js";
import { restaurantes } from "../../constants/dados.js";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import icons from "../../constants/icons.js";

function Busca() {

    function restaurante () {

    }

    function OpenCardapio() {

    }

    function AddFavorito() {

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
                    <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
                </View>
            }}
        />
    </View>
}

export default Busca;