import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";


function Button(props) {
    return <TouchableOpacity
        style={[styles.btn, props.isLoading ? styles.loading : ""]}
        disabled={props.isLoading}
        onPress={props.onPress}>

        {
            props.isLoading ? <ActivityIndicator color={styles.loadingColor} /> :
                <Text style={styles.texto}>{props.texto}</Text>
        }

    </TouchableOpacity>
}

export default Button;