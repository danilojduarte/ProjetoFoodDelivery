import repositoryEmpresa from "../repositories/repository.empresa.js";

async function Destaques(id_usuario) {

    const empresas = await repositoryEmpresa.Destaques(id_usuario);

    return empresas;
}

async function Listar(id_usuario, busca) {

    const empresas = await repositoryEmpresa.Listar(id_usuario, busca);

    return empresas;
}

async function InserirFavorito(id_usuario, id_empresa) {

    const empresas = await repositoryEmpresa.InserirFavorito(id_usuario, id_empresa);

    return empresas;
}

async function ExcluirFavorito(id_usuario, id_empresa) {

    const empresas = await repositoryEmpresa.ExcluirFavorito(id_usuario, id_empresa);

    return empresas;
}

async function Cardapio(id_usuario, id_empresa) {

    const card = await repositoryEmpresa.Cardapio(id_usuario, id_empresa);

    return card;
}

async function ListarProdutoId(id_empresa, id_produto) {

    const produto = await repositoryEmpresa.ListarProdutoId(id_empresa, id_produto);

    return produto;
}

export default { Destaques, Listar, InserirFavorito, ExcluirFavorito, Cardapio, ListarProdutoId };