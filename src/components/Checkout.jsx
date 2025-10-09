import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function Checkout() {
  const { getTotal, carrito, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSend = async (send) => {
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

    const result = await createOrder(order);

    if (result.success) {
      clearCart();
      toast.success(
        `Gracias por su compra en JordanStore.\nEl ID de su orden es: ${result.id}`,
        { duration: 4000 }
      );
      setTimeout(() => navigate("/"), 2000);
    } else {
      toast.error(`✖️ No se pudo procesar su compra.\n${result.error || ""}`);
    }
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
