import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Image src={item?.image}></Image>
        </Col>
        <Col>
          <h2>{item?.title}</h2>
          <p style={{ color: "#707072", fontSize: "20px" }}>
            {item?.category && capitalize(item.category)}
          </p>
          <p style={{ fontWeight: "bold", fontSize: "30px" }}>
            PEN. {item?.price}
          </p>
          <p>{item?.description}</p>
          <ItemCount></ItemCount>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
