import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { withLoading } from "../hoc/withLoading";
import { useParams } from "react-router";

const ItemListLoading = withLoading(ItemList);

function ItemListContainer() {
  const [inventory, setInventory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const productFetch = "https://fakestoreapi.com/products";
    const productCategoryFetch = `https://fakestoreapi.com/products/category/${id}`;

    fetch(id ? productCategoryFetch : productFetch)
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, [id]);

  return <ItemListLoading products={inventory}></ItemListLoading>;
}

export default ItemListContainer;
