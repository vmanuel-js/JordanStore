import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

function ItemCount({ item }) {
  const [count, setCount] = useState(0);
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAdd = () => setCount(count + 1);
  const handleSub = () => setCount(count - 1);
  const handleAddCart = () => {
    addToCart({ ...item, count });
    setAdded(true);
  };

  if (added) {
    return (
      <Button
        style={{ fontSize: "20px" }}
        variant="success"
        onClick={() => navigate("/cart")}
      >
        Ir al carrito 🛒
      </Button>
    );
  }

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
