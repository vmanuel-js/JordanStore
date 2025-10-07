import { CartContext } from "./CartContext.js";

function CartProvider({ children }) {
  return (
    <CartContext.Provider value={"value"}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
