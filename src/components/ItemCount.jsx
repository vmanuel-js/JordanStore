import { useState } from "react";
import Button from "react-bootstrap/Button";

function ItemCount() {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);
  const handleSub = () => setCount(count - 1);

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
        <Button onClick={handleSub} variant="danger">
          -
        </Button>
      </div>
      <Button
        style={{ fontSize: "20px" }}
        onClick={handleSub}
        variant="primary"
      >
        Agregar al carrito 🛒
      </Button>
    </div>
  );
}

export default ItemCount;
