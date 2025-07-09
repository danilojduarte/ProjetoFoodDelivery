import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";

export default function App() {
  return <AuthProvider>
    <Routes />
  </AuthProvider>
}

// Aula 23(41:41)- Consulta e status pedido fializada, iniciando abertura de pedido;