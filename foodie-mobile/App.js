import Routes from "./src/routes.js";
import { AuthProvider } from "./src/contexts/auth.js";

export default function App() {
  return <AuthProvider>
    <Routes />
  </AuthProvider>
}

// Lista de favoritos criadas com sucesso, ajustando remove e add favoritos 21(35:34);