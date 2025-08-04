import { View, Text, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useContext, useEffect, useState } from "react";
import api from "../../constants/api.js";
import { SaveUsuario, LoadUsuario } from "../../storage/storage.usuario.js";
import { AuthContext } from "../../contexts/auth.js";

function Login(props) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);

    const { user, setUser } = useContext(AuthContext);

    async function ProcessarLogin() {

        try {
            setLoading(true);
            const response = await api.post("/usuarios/login", { email, senha });

            if (response.data) {
                //Salvar dados do usuario no storage local
                api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
                await SaveUsuario(response.data);
                setUser(response.data);
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

    async function CarregarDados() {
        try {
            const usuario = await LoadUsuario();

            if (usuario.token) {
                api.defaults.headers.common['Authorization'] = "Bearer " + usuario.token;
                setUser(usuario);
            }
                

        } catch (error) {
        }
    };

    useEffect(() => {
        CarregarDados();
    }, []);

    return <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Header texto={email} />

        <View style={styles.formGroup}>
            <View style={styles.form}>
                <TextBox label="E-mail"
                    onChangeText={(texto) => setEmail(texto)}
                    value={email} />
            </View>

            <View style={styles.form}>
                <TextBox label="Senha" isPassword={false}
                    onChangeText={(texto) => setSenha(texto)}
                    value={senha} />
            </View>

            <View style={styles.form}>
                <Button texto="Acessar"
                    onPress={ProcessarLogin} isLoading={loading} />
            </View>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity onPress={() => props.navigation.navigate("registro")}>
                <Text style={styles.footerText}>Criar minha conta.</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
}

export default Login;