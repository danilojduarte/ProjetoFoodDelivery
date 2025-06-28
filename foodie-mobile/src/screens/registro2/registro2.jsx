import { View, ScrollView, Alert } from "react-native";
import { styles } from "./registro2.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useContext, useState } from "react";
import api from "../../constants/api.js";
import { SaveUsuario } from "../../storage/storage.usuario.js";
import { AuthContext } from "../../contexts/auth.js";


function Registro2(props) {

    const nome = props.route.params.nome;
    const email = props.route.params.email;
    const senha = props.route.params.senha;

    const { user, setUser } = useContext(AuthContext);

    const [endereco, setEndereco] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [cep, setCep] = useState("");
    const [loading, setLoading] = useState(false);

    async function ProcessarNovaConta() {
        
        try {
            setLoading(true);
            const response = await api.post("/usuarios", {
                nome, email, senha, endereco,
                complemento, bairro, cidade, uf, cep
            });

            if (response.data) {
                api.defaults.headers.common['Authorization'] = "Bearer " + response.data.token;
                // Salvar dados do usuario no storage local;
                await SaveUsuario(response.data);
                setUser(response.data);
            }

        } catch (error) {
            setLoading(false);
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }
    }

    return <>
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}
                automaticallyAdjustKeyboardInsets={true}
                showsVerticalScrollIndicator={false}
            >

                <Header texto="Informe seu endereço." />

                <View style={styles.formGroup}>

                    <View style={styles.formHorizontal}>
                        <View style={styles.form70}>
                            <TextBox label="Endereço"
                                onChangeText={(texto) => setEndereco(texto)}
                                value={endereco} />
                        </View>
                        <View style={styles.form30}>
                            <TextBox label="Compl."
                                onChangeText={(texto) => setComplemento(texto)}
                                value={complemento} />
                        </View>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="Bairro"
                            onChangeText={(texto) => setBairro(texto)}
                            value={bairro} />
                    </View>

                    <View style={styles.formHorizontal}>
                        <View style={styles.form70}>
                            <TextBox label="Cidade"
                                onChangeText={(texto) => setCidade(texto)}
                                value={cidade} />
                        </View>
                        <View style={styles.form30}>
                            <TextBox label="UF"
                                onChangeText={(texto) => setUf(texto)}
                                value={uf} />
                        </View>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="CEP"
                            onChangeText={(texto) => setCep(texto)}
                            value={cep} />
                    </View>

                    <View style={styles.form}>
                        <Button texto="Criar minha conta"
                            onPress={ProcessarNovaConta}
                            isLoading={loading} />
                    </View>
                </View>

            </ScrollView>
        </View>
    </>
}

export default Registro2;