import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQMZYcvdSQ04F4CiZG6NZ4JpWVqrsNVxg",
  authDomain: "job-cracker.firebaseapp.com",
  projectId: "job-cracker",
  storageBucket: "job-cracker.appspot.com",
  messagingSenderId: "507945783302",
  appId: "1:507945783302:web:fa08a3f355c9d3b94d7387"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;