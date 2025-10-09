import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <Container className="mt-4">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
          <Image
            fluid
            rounded
            src={item?.image}
            style={{ maxHeight: "600px", objectFit: "contain" }}
            alt={item?.name}
          />
        </Col>
        <Col xs={12} md={6} className="mb-5">
          <h2 className="fw-bold">{item?.name}</h2>
          <p className="text-secondary fs-5 mb-2">{item?.category}</p>
          <p className="fw-bold fs-3 text-success">PEN. {item?.price}</p>
          <p className="text-muted">{item?.description}</p>
          <div className="mt-3">
            <ItemCount item={item}></ItemCount>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
