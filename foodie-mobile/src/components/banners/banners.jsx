import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./banners.style.js";

function Banners(props) {

    function Search(id) {
        props.navigation.navigate("busca", {
            id_banner: id
        })
    }

    return <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                props.dados.map((banner, index) => {
                    return <View key={index} style={styles.banner}>
                        <TouchableOpacity>
                            <Image style={styles.icone} source={{ uri: banner.icone}} />
                        </TouchableOpacity>
                    </View>
                })
            }
        </ScrollView>
    </View>
}

export default Banners;

// Arquivo que direciona para as imagens banners