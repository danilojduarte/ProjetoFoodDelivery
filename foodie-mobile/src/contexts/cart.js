import { createContext, useEffect, useState } from "react";

const CartContext = createContext({});

function CartProvider(props) {

    const [itens, setItens] = useState([]);
    const [entrega, setEntrega] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [empresa, setEmpresa] = useState(0);

    function AddItem(item) {
        let novoItens = itens;
        novoItens.push(item);

        setItens(novoItens);
    }

    function CalculaValores() {
        const subtotalTemp = itens.reduce((prev, atual) => {
            return prev + atual.vl_total;
        }, 0);

        setSubtotal(subtotalTemp);
        setTotal(subtotalTemp + entrega);
    }

    useEffect(() => {
        CalculaValores();
    }, [itens]);

    return <CartContext.Provider value={{
        itens, setItens, entrega, setEntrega,
        subtotal, setSubtotal, total, setTotal, AddItem,
        empresa, setEmpresa, CalculaValores
    }}>
        {props.children}
    </CartContext.Provider>
}

export { CartProvider, CartContext };