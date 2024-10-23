import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzsMTBSTLN3JnJLl309VcQRmmonefZJiQ",
  authDomain: "movies-app-98735.firebaseapp.com",
  projectId: "movies-app-98735",
  storageBucket: "movies-app-98735.appspot.com",
  messagingSenderId: "735820443122",
  appId: "1:735820443122:web:88558669eaddde7e5d4f6b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);