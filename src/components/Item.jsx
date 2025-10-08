import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

function Item({ prods }) {
  const navigate = useNavigate();

  return (
    <Col xs={12} sm={6} md={4} lg={3} key={prods.id} className="mb-4">
      <Card style={{ border: "0.5px solid #000" }} className="h-100">
        <Card.Img className="p-5" variant="top" src={prods.image} />
        <Card.Body>
          <Card.Title style={{ fontSize: "18px" }}>{prods.name}</Card.Title>
          <Card.Text style={{ fontSize: "14px" }}>
            {prods.description}
          </Card.Text>
          <Button
            style={{ fontSize: "14px", width: "100%", marginBottom: "10px" }}
            onClick={() => navigate(`/prod/${prods.id}`)}
          >
            Ver información
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
