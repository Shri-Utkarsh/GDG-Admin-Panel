
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf4PQQbyvh-9IJ_8tTyjTTHsqPAjKkW1k",
  authDomain: "gdg-admin-panel.firebaseapp.com",
  projectId: "gdg-admin-panel",
  storageBucket: "gdg-admin-panel.appspot.com",
  messagingSenderId: "464259159067",
  appId: "1:464259159067:web:3290861b124a6a980494be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };















// const firebaseConfig = {
//   apiKey: "AIzaSyBf4PQQbyvh-9IJ_8tTyjTTHsqPAjKkW1k",
//   authDomain: "gdg-admin-panel.firebaseapp.com",
//   projectId: "gdg-admin-panel",
//   storageBucket: "gdg-admin-panel.appspot.com",
//   messagingSenderId: "464259159067",
//   appId: "1:464259159067:web:3290861b124a6a980494be"
// };