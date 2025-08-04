import { Image, TouchableOpacity, View, Text, TextInput, TouchableOpacityBase, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./detalhe-produto.style.js";
import icons from "../../constants/icons.js";
import Button from "../../components/button/button.jsx";
import api from "../../constants/api.js";
import { useEffect, useState, useContext } from "react";

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique

import { CartContext } from "../../contexts/cart.js";


function DetalheProduto(props) {

    const id_produto = props.route.params.id_produto;
    const id_empresa = props.route.params.id_empresa;
    const vl_taxa_entrega = props.route.params.vl_taxa_entrega;

    const [produto, setProduto] = useState({});
    const [qtd, setQtd] = useState(1);
    const [obs, setObs] = useState("");

    const {AddItem, setEmpresa, setEntrega} = useContext(CartContext);

    function AddProdutoCart(){
        const item = {
            id_item: uuidv4(),
            id_produto: id_produto,
            icone: produto.icone,
            nome: produto.nome,
            descricao: produto.descricao,
            obs: obs,
            qtd: qtd,
            vl_unitario: produto.vl_produto,
            vl_total: qtd * produto.vl_produto
            
        }

        setEmpresa(id_empresa);
        setEntrega(vl_taxa_entrega);
        AddItem(item);

        
        props.navigation.goBack();
    }

    async function LoadProduto(id_emp, id_prod) {
    
            try {
                const response = await api.get("/empresas/" + id_emp + "/produtos/" + id_prod);
                if (response.data) {
                    setProduto(response.data);
                }
    
            } catch (error) {
                console.log(error);
                if (error.response?.data.error)
                    Alert.alert(error.response.data.error);
                else
                    Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
            }
        }
    
    function AlterarQtd(valor) {
        if (qtd + valor < 1)
            return;

        setQtd(qtd + valor);
    }

        useEffect(() => {
        LoadProduto(id_empresa, id_produto);
        }, []);

    return <View style={styles.container}>

        <ScrollView>
            <View style={styles.containerFoto}>
                <Image source={{ uri: produto.icone }} 
                style={styles.foto} resizeMode="cover" />

                <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
                    <Image source={icons.back2} style={styles.back} />
                </TouchableOpacity>
            </View>

            <View style={styles.header}>
                <View style={styles.headerTextos}>
                    <Text style={styles.nome}>{produto.nome}</Text>
                    <Text style={styles.descricao}>{produto.descricao}</Text>
                    <Text style={styles.valor}>{
                        new Intl.NumberFormat("pt-BR",
                            { style: "currency", currency: "BRL" }).format(produto.vl_produto)
                    }</Text>
                </View>
            </View>

            <View style={styles.headerObs}>
                <Text style={styles.descricao}>Observações</Text>
                <TextInput style={styles.multiline}
                    multiline={true}
                    numberOfLines={5} 
                    onChangeText={(text) => setObs(text)}
                    />
            </View>
        </ScrollView>

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => AlterarQtd(-1)}>
                    <Image source={icons.menos} style={styles.imgQtd} />
                </TouchableOpacity>

                <Text style={styles.qtd}>{qtd}</Text>

                <TouchableOpacity onPress={() => AlterarQtd(1)}>
                    <Image source={icons.mais} style={styles.imgQtd} />
                </TouchableOpacity>

                <View style={styles.footerBtn}>
                    <Button texto="Inserir" onPress={AddProdutoCart}/>
                </View>
            </View>
        </KeyboardAvoidingView>
    </View>
}

export default DetalheProduto;