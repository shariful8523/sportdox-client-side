// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNZ5Z-YCQV-OygqsK_ksbrM2bi9FWbY6o",
  authDomain: "sportdox-97ffe.firebaseapp.com",
  projectId: "sportdox-97ffe",
  storageBucket: "sportdox-97ffe.firebasestorage.app",
  messagingSenderId: "903434226601",
  appId: "1:903434226601:web:231043affe5e731de292b8"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;
