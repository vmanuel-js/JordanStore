import { CartContext } from "./CartContext.js";
import { useState } from "react";

function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (item) => {
    if (carrito.some((prod) => prod.id === item.id)) {
      return;
    }
    setCarrito([...carrito, item]);
  };

  const getQuantity = () => {
    const quantities = carrito.map((item) => item.count);
    const total = quantities.reduce((acc, current) => acc + current, 0);
    return total;
  };

  const getTotal = () => {
    const precios = carrito.map((item) => item.count * item.price);
    const total = precios.reduce((acc, current) => acc + current, 0);
    return total;
  };

  const getProductFinalPrice = () => {
    const precio = carrito.map((item) => item.count * item.price);
    return precio;
  };

  const value = {
    addToCart,
    getQuantity,
    carrito,
    getTotal,
    getProductFinalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
