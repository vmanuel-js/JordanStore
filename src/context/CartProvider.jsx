import { CartContext } from "./CartContext.js";
import { useState } from "react";

function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const addCart = (prod) => {
    if (carrito.some((item) => item.id === prod.id)) {
      return;
    }
    setCarrito([...carrito, prod]);
  };

  const getQuantity = () => {
    const quantities = carrito.map((prod) => prod.count);
    const total = quantities.reduce((acc, current) => acc + current, 0);

    return total;
  };

  const value = {
    addCart,
    getQuantity,
    carrito,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
