import CartContext from "./CartContext";

function CartProvider({ children }) {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
