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
            returnKeyType={props.returnKeyType ? props.returnKeyType : "default"}
            onSubmitEditing={(value) => props.onSubmit && props.onSubmit(value.nativeEvent.text)}
        />
    </>
}

export default TextBox;