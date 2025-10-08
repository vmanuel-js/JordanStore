import ListGroup from "react-bootstrap/ListGroup";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

function CartContainer() {
  const { carrito, getTotal } = useContext(CartContext);
  const total = getTotal();

  if (carrito.length === 0) {
    return (
      <div className="mt-5 text-center">
        <p>No tienes prodcutos en el carro😔</p>
      </div>
    );
  }

  return (
    <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
      <ListGroup className="w-50">
        {carrito.map((prod) => (
          <ListGroup.Item key={prod.id}>
            {prod.name} x {prod.count}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h2 className="mt-3">Total: PEN. {total}</h2>
      <Button className="w-50 mt-3">Checkout</Button>
    </div>
  );
}

export default CartContainer;
