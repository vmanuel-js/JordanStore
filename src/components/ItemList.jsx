import { Container, Row } from "react-bootstrap";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <>
      <h1 className="text-center mt-3">Productos de JordanStore</h1>
      <Container className="mt-3">
        <Row>
          {products.map((prods) => (
            <Item prods={prods} key={prods.id}></Item>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ItemList;
