import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";

function ItemCount({ item }) {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => setCount(count + 1);
  const handleSub = () => setCount(count - 1);
  const handleAddCart = () => {
    addToCart({ ...item, count });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          style={{ fontSize: "20px" }}
          onClick={handleAdd}
          variant="success"
        >
          +
        </Button>
        <p style={{ fontSize: "20px" }}>{count}</p>
        <Button onClick={handleSub} variant="danger" disabled={count === 0}>
          -
        </Button>
      </div>
      <Button
        style={{ fontSize: "20px" }}
        variant="primary"
        onClick={handleAddCart}
        disabled={count === 0}
      >
        Agregar al carrito 🛒
      </Button>
    </div>
  );
}

export default ItemCount;
