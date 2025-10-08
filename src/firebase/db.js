import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { app } from "./config";
import toast from "react-hot-toast";

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

export const getOneGarment = async (id) => {
  const docRef = doc(db, "clothes", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    return false;
  }
};

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    toast.success(
      `Gracias por su compra en JordanStore, El ID de su orden es: ${docRef.id}`
    );
    return true;
  } catch (error) {
    toast.error(`Ocurrió un error: ${error.code}}`);
    return false;
  }
};
