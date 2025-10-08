import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Checkout() {
  return (
    <div className="mt-5 d-flex justify-content-center">
      <Form className="w-50">
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
