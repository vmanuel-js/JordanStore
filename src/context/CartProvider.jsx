import { CartContext } from "./CartContext.js";
import { useState } from "react";
import toast from "react-hot-toast";

function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const addToCart = (item) => {
    if (carrito.some((prod) => prod.id === item.id)) {
      return;
    }
    setCarrito([...carrito, item]);
    toast.success("¡Se agregó tu producto al carrito!");
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

  const deleteProduct = (id) => {
    const updateCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(updateCarrito);
  };

  const addQuantity = (id) => {
    const updatedCarrito = carrito.map((item) => {
      if (item.id === id) {
        toast.success("Producto agregado! 😊");
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCarrito(updatedCarrito);
  };

  const minusQuantity = (id) => {
    const updatedCarrito = carrito
      .map((item) => {
        if (item.id === id) {
          const newCount = item.count - 1;
          if (newCount <= 0) {
            toast.error("Producto eliminado del carrito");
            return null;
          }
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
      .filter((item) => item !== null);
    setCarrito(updatedCarrito);
  };

  const clearCart = () => {
    setCarrito([]);
  };

  const value = {
    addToCart,
    getQuantity,
    carrito,
    getTotal,
    getProductFinalPrice,
    deleteProduct,
    addQuantity,
    minusQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
