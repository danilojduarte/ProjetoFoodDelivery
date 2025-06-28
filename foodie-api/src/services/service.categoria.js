import repositoryCategoria from "../repositories/repository.categoria.js";

async function Listar() {

    const categorias = await repositoryCategoria.Listar();

    return categorias;
}

export default { Listar };