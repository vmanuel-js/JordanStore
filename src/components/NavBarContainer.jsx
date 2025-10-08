import { useEffect, useState } from "react";
import { getCategoriesClothes } from "../firebase/db";
import NavBar from "./NavBar";

function NavBarContainer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesClothes = async () => {
      try {
        const data = await getCategoriesClothes();
        setCategories(data);
      } catch (error) {
        console.error("Ha ocurrido un error: ", error);
      }
    };

    fetchCategoriesClothes();
  }, []);

  return <NavBar categories={categories} />;
}

export default NavBarContainer;
