import PacmanLoader from "react-spinners/PacmanLoader";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [part, setPart] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setPart(data));
  }, [id]);

  if (!part) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <PacmanLoader color="#0d6efd" size={15}></PacmanLoader>
      </div>
    );
  }

  return <ItemDetail item={part}></ItemDetail>;
}

export default ItemDetailContainer;
