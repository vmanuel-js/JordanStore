import PacmanLoader from "react-spinners/PacmanLoader";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getOneGarment } from "../firebase/db";

function ItemDetailContainer() {
  const [part, setPart] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchPart = async () => {
      try {
        const data = await getOneGarment(id);
        setPart(data);
      } catch (error) {
        console.error("Ha ocurrido un error: ", error);
      }
    };

    fetchPart();
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
