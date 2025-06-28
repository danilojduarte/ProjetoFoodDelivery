import { execute } from "../database/sqlite.js";

async function Listar() {

    const sql = "select * from categoria order by ordem";
    const categorias = await execute(sql, []);

    return categorias;
}

export default { Listar };