import { Alert, Image, View, Text, ScrollView, TouchableOpacity, Platform, StatusBar } from "react-native";
import { styles } from "./aba-home.style.js";
import icons from "../../constants/icons.js";
import TextBox from "../../components/textbox/textbox.jsx";
import { useEffect, useState, useCallback, useContext } from "react";
import Categorias from "../../components/categorias/categorias.jsx";
import Banners from "../../components/banners/banners.jsx";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import api from "../../constants/api.js";
import { useFocusEffect } from "@react-navigation/native";

function AbaHome(props) {
  const [busca, setBusca] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [banners, setBanner] = useState([]);
  const [restaurantes, setRestaurantes] = useState([]);

  // Funções para buscar dados
  async function LoadCategory() {
    try {
      const response = await api.get("/categorias");
      if (response.data) setCategorias(response.data);
    } catch (error) {
      handleError(error);
    }
  }

  async function LoadBanner() {
    try {
      const response = await api.get("/banners");
      if (response.data) setBanner(response.data);
    } catch (error) {
      handleError(error);
    }
  }

  async function LoadDestaque() {
    try {
      const response = await api.get("/empresas/destaques");
      if (response.data) setRestaurantes(response.data);
    } catch (error) {
      handleError(error);
    }
  }

  function handleError(error) {
    if (error.response?.data.error) Alert.alert(error.response.data.error);
    else Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
  }

  function OpenCardapio(id) {
    props.navigation.navigate("cardapio", { id_empresa: id });
  }

  async function RemoveFavorito(id) {
    try {
      await api.delete("/empresas/" + id + "/favoritos");
      LoadDestaque();
    } catch (error) {
      handleError(error);
    }
  }

  async function AddFavorito(id) {
    try {
      await api.post("/empresas/" + id + "/favoritos");
      LoadDestaque();
    } catch (error) {
      handleError(error);
    }
  }

  function Search(termo) {
    props.navigation.navigate("busca", { busca: termo });
  }

  function SearchCategoria(id) {
    props.navigation.navigate("busca", { id_categoria: id });
  }

  function SearchBanner(id) {
    props.navigation.navigate("busca", { id_banner: id });
  }

  useEffect(() => {
    LoadCategory();
    LoadBanner();
    LoadDestaque();
  }, []);

  useFocusEffect(
    useCallback(() => {
      LoadCategory();
      LoadBanner();
      LoadDestaque();
    }, [])
  );

  return (
    <>
      {/* 👇 Adicionado para forçar a barra de status ficar clara e gerenciar a altura no Android */}
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* 👇 View externa com paddingTop manual, equivalente ao SafeAreaView no topo */}
      <View
        style={[
          styles.container,
          {
            // Adiciona paddingTop baseado no status bar do sistema
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          },
        ]}
      >
        <View style={styles.headerBar}>
          <Image source={icons.logo2} style={styles.logo} />
          <TouchableOpacity onPress={() => props.navigation.navigate("checkout")}>
            <Image source={icons.cart} style={styles.cart} />
            <Text style={styles.cartQtd}>5</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.busca}>
          <TextBox
            placeholder="O que vamos pedir hoje?"
            onChangeText={(texto) => setBusca(texto)}
            value={busca}
            returnKeyType="search"
            onSubmit={Search}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Categorias dados={categorias} onClick={SearchCategoria} />

          <Banners dados={banners} onClick={SearchBanner} />

          <View>
            <Text style={styles.destaques}>Destaques</Text>
          </View>

          {restaurantes.map((restaurante, index) => (
            <View key={index}>
              <Restaurante
                id_empresa={restaurante.id_empresa}
                logotipo={restaurante.icone}
                nome={restaurante.nome}
                endereco={restaurante.endereco}
                icone={restaurante.favorito == "S" ? icons.favoritoFull : icons.favorito}
                onPress={OpenCardapio}
                onClickIcon={restaurante.favorito == "S" ? RemoveFavorito : AddFavorito}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

export default AbaHome;
