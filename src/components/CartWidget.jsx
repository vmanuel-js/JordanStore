import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function CartWidget() {
  return (
    <Button variant="dark">
      Productos <Badge bg="secondary">9</Badge>
    </Button>
  );
}

export default CartWidget;
