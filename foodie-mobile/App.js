import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";

export default function App() {
  return <AuthProvider>
    <Routes />
  </AuthProvider>
}

// Aula 23(00:00) Finalizada - Aula finalizada, iniciando aula 24# tela de cardapio|tela empresa;