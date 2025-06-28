export const categorias = [
    {
        id: 1,
        descricao: "Burguers",
        icone: require("../assets/cat-burguer.png")
    },
    {
        id: 2,
        descricao: "Pizza",
        icone: require("../assets/cat-pizza.png")
    },
    {
        id: 3,
        descricao: "Fritas",
        icone: require("../assets/cat-fritas.png")
    },
    {
        id: 4,
        descricao: "Sushi",
        icone: require("../assets/cat-sushi.png")
    },
    {
        id: 5,
        descricao: "Churrasco",
        icone: require("../assets/cat-churrasco.png")
    },
    {
        id: 6,
        descricao: "Sucos",
        icone: require("../assets/cat-suco.png")
    },
    {
        id: 7,
        descricao: "Doces",
        icone: require("../assets/cat-sobremesa.png")
    }
];

export const banners = [
    {
        id: 1,
        descricao: "Pizzas",
        icone: require("../assets/banner1.png")
    },
    {
        id: 2,
        descricao: "Comida Saudável",
        icone: require("../assets/banner2.png")
    }
];

export const restaurantes = [
    {
        id: 1,
        nome: "Churrascaria e Pizzaria Boizão",
        endereco: "Alamensa Santos, 954",
        logotipo: require("../assets/restaurante1.png")
    },
    {
        id: 2,
        nome: "The Keba’s Bar",
        endereco: "Rua Rui Barbosa, 512",
        logotipo: require("../assets/restaurante2.png")
    },
    {
        id: 3,
        nome: "Churrascaria e Pizzaria Boizão",
        endereco: "Alamensa Santos, 954",
        logotipo: require("../assets/restaurante1.png")
    },
    {
        id: 4,
        nome: "The Keba’s Bar",
        endereco: "Rua Rui Barbosa, 512",
        logotipo: require("../assets/restaurante2.png")
    },
    {
        id: 5,
        nome: "Churrascaria e Pizzaria Boizão",
        endereco: "Alamensa Santos, 954",
        logotipo: require("../assets/restaurante1.png")
    },
    {
        id: 6,
        nome: "The Keba’s Bar",
        endereco: "Rua Rui Barbosa, 512",
        logotipo: require("../assets/restaurante2.png")
    },
    {
        id: 7,
        nome: "Churrascaria e Pizzaria Boizão",
        endereco: "Alamensa Santos, 954",
        logotipo: require("../assets/restaurante1.png")
    },
    {
        id: 8,
        nome: "The Keba’s Bar",
        endereco: "Rua Rui Barbosa, 512",
        logotipo: require("../assets/restaurante2.png")
    }
];

export const pedidos = [
    {
        id: 1,
        nome: "Churrascaria e Pizzaria Boizão",
        endereco: "Alameda Santos, 954",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 149,
        logotipo: require("../assets/restaurante1.png")
    },
    {
        id: 2,
        nome: "The Keba’s Bar",
        endereco: "Rua Rui Barbosa, 512",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 52,
        logotipo: require("../assets/restaurante2.png")
    },
    {
        id: 3,
        nome: "Churrascaria e Pizzaria Boizão",
        endereco: "Alameda Santos, 954",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 71,
        logotipo: require("../assets/restaurante1.png")
    },
    {
        id: 4,
        nome: "The Keba’s Bar",
        endereco: "Rua Rui Barbosa, 512",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 29.90,
        logotipo: require("../assets/restaurante2.png")
    },
    {
        id: 5,
        nome: "Churrascaria e Pizzaria Boizão",
        endereco: "Alameda Santos, 954",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 149,
        logotipo: require("../assets/restaurante1.png")
    },
    {
        id: 6,
        nome: "The Keba’s Bar",
        endereco: "Rua Rui Barbosa, 512",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 48,
        logotipo: require("../assets/restaurante2.png")
    },
    {
        id: 7,
        nome: "Churrascaria e Pizzaria Boizão",
        endereco: "Alameda Santos, 954",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 19.90,
        logotipo: require("../assets/restaurante1.png")
    },
    {
        id: 8,
        nome: "The Keba’s Bar",
        endereco: "Rua Rui Barbosa, 512",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 112,
        logotipo: require("../assets/restaurante2.png")
    }
];

export const restaurante = {
    id: 1,
    nome: "The Keba’s Bar",
    endereco: "Rua Rui Barbosa, 512 - Paraiso - São Paulo - SP",
    logotipo: require("../assets/restaurante2.png"),
    foto: require("../assets/foto-restaurante.png"),
    vlEntrega: 5.00,
    isFavorito: true,
    cardapio: [
        {
            idCategoria: 1,
            categoria: "Ofertas",
            itens: [
                {
                    idProduto: 1,
                    nome: "Pizza Calabresa",
                    descricao: "Massa artesanal, mussarela e calabresa",
                    valor: 30.00,
                    foto: require("../assets/produto-pizza.png")
                },
                {
                    idProduto: 2,
                    nome: "Coca-Cola Lata",
                    descricao: "Coca-Cola lata de 300ml trincando de gelada",
                    valor: 5.00,
                    foto: require("../assets/produto-coca.png")
                }
            ]
        },
        {
            idCategoria: 2,
            categoria: "Mais Pedidos",
            itens: [
                {
                    idProduto: 3,
                    nome: "Pizza Mussarela",
                    descricao: "Massa artesanal, mussarela e calabresa",
                    valor: 30.00,
                    foto: require("../assets/produto-pizza.png")
                },
                {
                    idProduto: 4,
                    nome: "Coca-Cola Litro",
                    descricao: "Coca-Cola lata de 300ml trincando de gelada",
                    valor: 5.00,
                    foto: require("../assets/produto-coca.png")
                }
            ]
        }
    ]
};

export const pedido = {
    id: 1,
    nome: "Churrascaria e Pizzaria Boizão",
    endereco: "Alameda Santos, 954",
    status: "Entregue",
    dt_pedido: "10/05/2024",
    vl_total: 66.00,
    logotipo: require("../assets/restaurante1.png"),
    itens: [
        {
            idItem: 1,
            idProduto: 1,
            nome: "Pizza Calabresa",
            descricao: "Massa artesanal, mussarela e calabresa",
            foto: require("../assets/produto-pizza.png"),
            qtd: 2,
            vlUnitario: 30.00,
            vlTotal: 60.00
        },
        {
            idItem: 2,
            idProduto: 2,
            nome: "Coca-Cola Lata",
            descricao: "Coca-Cola lata de 300ml trincando de gelada",
            foto: require("../assets/produto-coca.png"),
            qtd: 1,
            vlUnitario: 6.00,
            vlTotal: 6.00
        }
    ]
};