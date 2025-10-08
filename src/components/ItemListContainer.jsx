import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { withLoading } from "../hoc/withLoading";
import { useParams } from "react-router";
import { getClothes } from "../firebase/db";

const ItemListLoading = withLoading(ItemList);

function ItemListContainer() {
  const [inventory, setInventory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const data = await getClothes(id);
        setInventory(data);
      } catch (error) {
        console.error("Ha ocurrido un error: ", error);
      }
    };

    fetchClothes();
  }, [id]);

  return <ItemListLoading products={inventory}></ItemListLoading>;
}

export default ItemListContainer;
