import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function CartContainer() {
  const {
    carrito,
    getTotal,
    getProductFinalPrice,
    deleteProduct,
    addQuantity,
    minusQuantity,
  } = useContext(CartContext);
  const total = getTotal();
  const subtotal = getProductFinalPrice();
  const navigate = useNavigate();

  if (carrito.length === 0) {
    return (
      <div className="mt-5 text-center">
        <p>No tienes prodcutos en el carro😔</p>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Mira nuestros productos!
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
      <Table className="w-50">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Nombre del Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Borrar Item</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((prod, i) => (
            <tr key={prod.id} className="text-center">
              <td>{i + 1}</td>
              <td>{prod.name}</td>
              <td>{prod.count}</td>
              <td>{prod.price}</td>
              <td>{subtotal[i]}</td>
              <td className="d-flex justify-content-between">
                <Button
                  variant="outline-info"
                  onClick={() => addQuantity(prod.id)}
                >
                  ➕
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => minusQuantity(prod.id)}
                >
                  ➖
                </Button>
                <Button
                  variant="outline-success"
                  onClick={() => deleteProduct(prod.id)}
                >
                  🗑️
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2 className="mt-3">Total: PEN. {total}</h2>
      <Button className="w-50 mt-3" onClick={() => navigate("/checkout")}>
        Checkout
      </Button>
    </div>
  );
}

export default CartContainer;
