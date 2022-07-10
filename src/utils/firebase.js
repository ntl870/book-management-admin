import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA8dydc9XF6TJaAYTTX9MNdyin5dTYQiNU",
  authDomain: "book-management-admin.firebaseapp.com",
  projectId: "book-management-admin",
  storageBucket: "book-management-admin.appspot.com",
  messagingSenderId: "766238808224",
  appId: "1:766238808224:web:989991877b80a8c38911c5",
};

const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
