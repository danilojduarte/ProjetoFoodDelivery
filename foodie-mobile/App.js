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

// Aula 25(00:00) Aula, #25 finalizada, iniciando aula 26# para atribuir itens ao carrinho;


//Verificar código do componente que salva  os dados no storage do aparelho.
//Ajusta padding da tela do carrinho;