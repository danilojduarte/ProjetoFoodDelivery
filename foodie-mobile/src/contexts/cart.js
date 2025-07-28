import { createContext, useState } from "react";

const CartContext = createContext({});

function CartProvider(props) {

    const [itens, setItens] = useState([]);
    const [entrega, setEntrega] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    function AddItem(item) {
        let novoItens = itens;
        novoItens.push(item);

        setItens(novoItens);
    }

    return <CartContext.Provider value={{ 
        itens, setItens, entrega, setEntrega, 
        subtotal, setSubtotal, total, setTotal, AddItem
        }}>
        {props.children}
    </CartContext.Provider>
}

export { CartProvider, CartContext };