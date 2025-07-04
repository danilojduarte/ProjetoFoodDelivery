import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";

export default function App() {
  return <AuthProvider>
    <Routes />
  </AuthProvider>
}

// Ajustando dados para tela de busca #22(39:00);