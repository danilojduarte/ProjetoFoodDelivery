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

// Aula 26(20:14) Ajustando tela de qtd produtos;

//Verificar código do componente que salva  os dados no storage do aparelho.
//Ajusta padding da tela do carrinho;