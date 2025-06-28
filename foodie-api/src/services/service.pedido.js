import repositoryPedido from "../repositories/repository.pedido.js";

async function Listar() {

    const pedidos = await repositoryPedido.Listar();

    return pedidos;
}

async function ListarId(id_pedido) {

    const pedido = await repositoryPedido.ListarId(id_pedido);

    return pedido;
}

async function Inserir(id_usuario, dados) {

    const pedido = await repositoryPedido.Inserir(id_usuario, dados);

    return pedido;
}

export default { Listar, ListarId, Inserir };