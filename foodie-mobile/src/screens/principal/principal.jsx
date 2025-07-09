import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icons from "../../constants/icons.js";

import AbaHome from "../../screens/aba-home/aba-home.jsx";
import AbaFavoritos from "../../screens/aba-favoritos/aba-favoritos.jsx";
import AbaPedidos from "../../screens/aba-pedidos/aba-pedidos.jsx";
import AbaPerfil from "../../screens/aba-perfil/aba-perfil.jsx";

const Tab = createBottomTabNavigator();

function Principal() {
    return <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>

        <Tab.Screen name="home" component={AbaHome} options={{
            headerShown: false,
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => {
                return <Image source={icons.abaHome}
                    style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
            }
        }} />

        <Tab.Screen name="favoritos" component={AbaFavoritos} options={{
            title: "Favoritos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => {
                return <Image source={icons.abafavorito}
                    style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
            }
        }} />

        <Tab.Screen name="pedidos" component={AbaPedidos} options={{
            title: "Pedidos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => {
                return <Image source={icons.abaPedido}
                    style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
            }
        }} />

        <Tab.Screen name="perfil" component={AbaPerfil} options={{
            title: "Meu Perfil",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            tabBarIcon: ({ focused }) => {
                return <Image source={icons.abaPerfil}
                    style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
            }
        }} />

    </Tab.Navigator>
}

export default Principal;