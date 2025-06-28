import serviceCategoria from "../services/service.categoria.js";

async function Listar(req, res) {
    try {
        const categorias = await serviceCategoria.Listar();

        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };