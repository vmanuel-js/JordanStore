import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function NavBarContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return <NavBar categories={categories} />;
}

export default NavBarContainer;
