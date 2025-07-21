import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";

export default function App() {
  return <AuthProvider>
    <Routes />
  </AuthProvider>
}

// Aula 25(45:17) Ajustando pedidos para serem add ao carrinho, atribuido 2 produtos, subtituir o segundo por produto diferente para teste (Contexto do Carrinho);


//Verificar código do componente que salva  os dados no storage do aparelho.
//Ajusta padding da tela do carrinho;