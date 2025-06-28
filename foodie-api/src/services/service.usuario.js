import repositoryUsuario from "../repositories/repository.usuario.js";
import bcrypt from "bcrypt";
import jwt from "../token.js";

async function Favoritos(id_usuario) {

    const favoritos = await repositoryUsuario.Favoritos(id_usuario);

    return favoritos;
}

async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep) {

    const validarUsuario = await repositoryUsuario.ListarByEmail(email);

    if (validarUsuario.id_usuario)
        throw "Já existe uma conta criada com esse e-mail";

    const hashSenha = await bcrypt.hash(senha, 10);

    const usuario = await repositoryUsuario.Inserir(nome, email, hashSenha, endereco, complemento,
        bairro, cidade, uf, cep);

    usuario.token = jwt.CreateJWT(usuario.id_usuario);
    usuario.nome = nome;
    usuario.email = email;
    usuario.endereco = endereco;
    usuario.complemento = complemento;
    usuario.bairro = bairro;
    usuario.cidade = cidade;
    usuario.uf = uf;
    usuario.cep = cep;

    return usuario;
}

async function Login(email, senha) {

    const usuario = await repositoryUsuario.ListarByEmail(email);

    if (usuario.length == 0)
        return [];
    else {
        if (await bcrypt.compare(senha, usuario.senha)) {
            delete usuario.senha;
            usuario.token = jwt.CreateJWT(usuario.id_usuario);

            return usuario;
        }
        else
            return [];
    }
}

async function Perfil(id_usuario) {

    const usuario = await repositoryUsuario.ListarById(id_usuario);

    return usuario;
}

export default { Favoritos, Inserir, Login, Perfil };