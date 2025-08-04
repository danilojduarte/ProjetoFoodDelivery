import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";
import { CartProvider } from "./src/contexts/cart.js";

export default function App() {
  return <AuthProvider>
    <CartProvider>
      <Routes />
    </CartProvider>
  </AuthProvider>
}

// Aula 28(39:31) Ajustando pedidos para não serem realizados por 2 empresas;

//Verificar código do componente que salva  os dados no storage do aparelho.
//Ajusta padding da tela do carrinho;