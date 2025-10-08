import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { app } from "./config";
import { data } from "react-router";

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

export const getGarmentByCategory = async (category) => {
  const q = query(collection(db, "clothes"), where("category", "==", category));
  const garment = [];

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    garment.push({ ...doc.data(), id: doc.id });
  });

  return garment;
};
