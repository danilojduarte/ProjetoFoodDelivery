import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./aba-perfil.style.js";
import icons from "../../constants/icons.js";
import { SaveUsuario } from "../../storage/storage.usuario.js";
import { AuthContext } from "../../contexts/auth.js";
import { useContext, useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import api from "../../constants/api.js";

function AbaPerfil() {
    const { setUser } = useContext(AuthContext);
    const [perfil, setPerfil] = useState(null);

    function Logout() {
        SaveUsuario({});
        setUser({});
    }

    async function LoadPerfil() {
        try {
            const response = await api.get("/meu-perfil");
            setPerfil(response.data);
        } catch (error) {
            console.log("Erro ao carregar perfil", error);
        }
    }

    useFocusEffect(
        useCallback(() => {
            LoadPerfil();
        }, [])
    );

    if (!perfil) {
        return (
            <View style={styles.container}>
                <Text>Carregando perfil...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.nome}>{perfil.nome}</Text>
                <Text style={styles.email}>{perfil.email}</Text>
                <Text style={styles.endereco}>
                    {perfil.endereco}, {perfil.numero} - {perfil.bairro}
                </Text>
                <Text style={styles.endereco}>
                    {perfil.cidade} - {perfil.estado}, {perfil.cep}
                </Text>
            </View>

            <TouchableOpacity style={styles.item} onPress={Logout}>
                <View style={styles.containerIcone}>
                    <Image source={icons.logout} style={styles.icone} />
                </View>
                <View style={styles.textos}>
                    <Text style={styles.titulo}>Desconectar</Text>
                    <Text style={styles.subtitulo}>Sair do aplicativo</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default AbaPerfil;
