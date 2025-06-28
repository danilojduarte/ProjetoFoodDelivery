import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";

export default function App() {
  return <AuthProvider>
    <Routes />
  </AuthProvider>
}

// Arquivo atualizado para reposiorio, iniciando aula  #21(00:00) ajustando favoritos;