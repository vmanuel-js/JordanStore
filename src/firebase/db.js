import { getFirestore } from "firebase/firestore";
import { app } from "./config";
import toast from "react-hot-toast";

const db = getFirestore(app);
