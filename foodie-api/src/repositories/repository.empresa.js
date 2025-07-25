import { execute } from "../database/sqlite.js";

async function Destaques(id_usuario) {

    const sql = `select case when u.id_favorito is null then 'N' else 'S' end as favorito, e.*
    from  destaque d
    join empresa e on (e.id_empresa = d.id_empresa)
    left join usuario_favorito u on (u.id_empresa = e.id_empresa and u.id_usuario = ?)
    order by d.ordem`;

    const empresas = await execute(sql, [id_usuario]);

    return empresas;
}

async function Listar(id_usuario, busca, id_categoria, id_banner) {

    let filtro = [id_usuario];

    let sql = `select case when u.id_favorito is null then 'N' else 'S' end as favorito, e.*
    from  empresa e
    left join usuario_favorito u on (u.id_empresa = e.id_empresa and u.id_usuario = ?)
    left join banner b on (b.id_empresa = e.id_empresa)
    where e.id_empresa > 0`;

    if (busca) {
        filtro.push('%' + busca + '%');
        sql = sql + " and e.nome like ?";
    }

    if (id_categoria) {
        filtro.push(id_categoria);
        sql = sql + " and e.id_categoria = ?";
    }

    if (id_banner) {
        filtro.push(id_banner);
        sql = sql + " and b.id_banner = ?";
    }


    sql = sql + " order by e.nome";

    const empresas = await execute(sql, filtro);

    return empresas;
}

async function InserirFavorito(id_usuario, id_empresa) {

    await ExcluirFavorito(id_usuario, id_empresa);

    const sql = `insert into usuario_favorito(id_usuario, id_empresa) values(?, ?) 
    returning id_favorito`;

    const fav = await execute(sql, [id_usuario, id_empresa]);

    return fav[0];
}

async function ExcluirFavorito(id_usuario, id_empresa) {

    const sql = `delete from usuario_favorito where id_empresa = ? and id_usuario = ? 
    returning id_favorito`;

    const fav = await execute(sql, [id_empresa, id_usuario]);

    return fav[0];
}

async function Cardapio(id_usuario, id_empresa) {

    //Dados do Restaurante -- --
    let sql = `select case when u.id_favorito is null then 'N' else 'S' end as favorito, e.*
    from  empresa e
    left join usuario_favorito u on (u.id_empresa = e.id_empresa and u.id_usuario = ?)
    where e.id_empresa = ?`;

    const empresa = await execute(sql, [id_usuario, id_empresa]);
    let retorno = empresa[0];

    retorno.categorias = [];

    //Categorias do Restaurante -- --
     sql = `select distinct c.id_categoria, c.categoria
    from produto p
    join produto_categoria c on (c.id_empresa = p.id_empresa and c.id_categoria = p.id_categoria)
    where p.id_empresa = ?
    order by c.ordem, p.nome`;

    const categorias_unicas = await execute(sql, [id_empresa]);
    
    for (const cat of categorias_unicas) {

        //Busca produtos que pertencem a categoria do loop -- --
        sql = `select p.*, c.categoria
        from produto p
        join produto_categoria c on (c.id_empresa = p.id_empresa and c.id_categoria = p.id_categoria)
        where p.id_empresa = ?
        and p.id_categoria = ?
        order by c.ordem, p.nome`;

        const itens = await execute(sql, [id_empresa, cat.id_categoria]);
        
        cat.itens = [itens];

        retorno.categorias.push(cat);
    }
    

    return retorno;
}

async function ListarProdutoId(id_empresa, id_produto) {

    let sql = `select *
    from  produto 
    where id_empresa = ? and id_produto = ?`;

    const produto = await execute(sql, [id_empresa, id_produto]);

    return produto[0];
}

export default { Destaques, Listar, InserirFavorito, ExcluirFavorito, Cardapio, ListarProdutoId };