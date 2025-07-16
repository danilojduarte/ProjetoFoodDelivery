import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";

export default function App() {
  return <AuthProvider>
    <Routes />
  </AuthProvider>
}

// Aula 25(31:55) Rotas banco de dados ajustada, retornando ao app para ajustar comandos (Contexto do Carrinho);