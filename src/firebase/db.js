import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getClothes = async () => {
  const querySnapshot = await getDocs(collection(db, "clothes"));
  const clothes = [];

  querySnapshot.forEach((doc) => {
    clothes.push({ ...doc.data(), id: doc.id });
  });

  return clothes;
};

export const getCategoriesClothes = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const categories = [];

  querySnapshot.forEach((doc) => {
    categories.push({ ...doc.data(), id: doc.id });
  });

  return categories;
};
