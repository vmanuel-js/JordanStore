import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdQ2kVTLR7_LZKUEAMQac0GRrloJDW_MQ",
  authDomain: "urban-clothing-store.firebaseapp.com",
  projectId: "urban-clothing-store",
  storageBucket: "urban-clothing-store.firebasestorage.app",
  messagingSenderId: "1016997152259",
  appId: "1:1016997152259:web:ae0d7394be59c5e57ef036"
};

export const app = initializeApp(firebaseConfig);