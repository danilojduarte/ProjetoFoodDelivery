import { Text, TextInput } from "react-native";
import { styles } from "./textbox.style.js";


function TextBox(props) {
    return <>
        {
            props.label && <Text style={styles.label}>{props.label}</Text>
        }
        <TextInput style={styles.input}
            placeholder={props.placeholder}
            secureTextEntry={props.isPassword}
            onChangeText={(texto) => props.onChangeText(texto)}
            value={props.value}
        />
    </>
}

export default TextBox;