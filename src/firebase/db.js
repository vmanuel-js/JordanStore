import { getFirestore, collection, getDocs } from "firebase/firestore";
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
