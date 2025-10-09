import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function CartContainer() {
  const {
    carrito,
    getTotal,
    getProductFinalPrice,
    deleteProduct,
    addQuantity,
    minusQuantity,
    clearCart,
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
    <div className="mt-5 d-flex flex-column align-items-center justify-content-center px-3">
      <div className="table-responsive w-100">
        <Table className="align-middle text-center">
          <thead className="table-light">
            <tr>
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
              <tr key={prod.id}>
                <td>{i + 1}</td>
                <td>{prod.name}</td>
                <td>{prod.count}</td>
                <td>{prod.price}</td>
                <td>{subtotal[i]}</td>
                <td>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    <Button
                      size="sm"
                      variant="outline-info"
                      onClick={() => addQuantity(prod.id)}
                    >
                      ➕
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => minusQuantity(prod.id)}
                    >
                      ➖
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-success"
                      onClick={() => deleteProduct(prod.id)}
                    >
                      🗑️
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="d-flex flex-column flex-sm-row align-items-center mt-3 gap-3">
        <p className="m-0 text-center">Borrar productos del carrito:</p>
        <Button
          variant="danger"
          onClick={() => {
            clearCart();
            toast.success("Carrito vaciado correctamente!");
          }}
        >
          🧹
        </Button>
      </div>
      <h2 className="mt-4 text-center">Total: PEN. {total}</h2>
      <Button className="w-50 mt-3 w-100" onClick={() => navigate("/checkout")}>
        Checkout
      </Button>
    </div>
  );
}

export default CartContainer;
