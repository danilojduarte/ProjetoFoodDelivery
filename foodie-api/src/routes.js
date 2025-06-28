import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedido from "./controllers/controller.pedido.js";
import controllerUsuario from "./controllers/controller.usuario.js";
import jwt from "./token.js";

const router = Router();

router.get("/categorias", jwt.ValidateJWT, controllerCategoria.Listar);
router.get("/banners", jwt.ValidateJWT, controllerBanner.Listar);

// Empresas
router.get("/empresas/destaques", jwt.ValidateJWT, controllerEmpresa.Destaques);
router.get("/empresas", jwt.ValidateJWT, controllerEmpresa.Listar);
router.post("/empresas/:id_empresa/favoritos", jwt.ValidateJWT, controllerEmpresa.InserirFavorito);
router.delete("/empresas/:id_empresa/favoritos", jwt.ValidateJWT, controllerEmpresa.ExcluirFavorito);
router.get("/empresas/:id_empresa/cardapio", jwt.ValidateJWT, controllerEmpresa.Cardapio);
router.get("/empresas/:id_empresa/produtos/:id_produto", jwt.ValidateJWT, controllerEmpresa.ListarProdutoId);


// Pedidos
router.get("/pedidos", jwt.ValidateJWT, controllerPedido.Listar);
router.get("/pedidos/:id_pedido", jwt.ValidateJWT, controllerPedido.ListarId);
router.post("/pedidos", jwt.ValidateJWT, controllerPedido.Inserir);


// Usuarios
router.get("/usuarios/favoritos", jwt.ValidateJWT, controllerUsuario.Favoritos);
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios", controllerUsuario.Inserir);
router.get("/usuarios/perfil", jwt.ValidateJWT, controllerUsuario.Perfil);

export default router;