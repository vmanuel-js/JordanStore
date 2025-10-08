import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Checkout() {
  const { getTotal, carrito } = useContext(CartContext);

  const handleSend = (send) => {
    send.preventDefault();
    const form = send.target;
    const email = form.email.value;
    const nombre = form.nombre.value;
    const telefono = form.telefono.value;

    const order = {
      buyer: {
        email,
        nombre,
        telefono,
      },

      total: getTotal(),
      items: carrito,
      date: serverTimestamp(),
    };

    createOrder(order);
  };

  return (
    <div className="mt-5 d-flex justify-content-center">
      <Form className="w-50" onSubmit={handleSend}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre completo"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefono">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su telefono"
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Finalizar compra
        </Button>
      </Form>
    </div>
  );
}

export default Checkout;
