// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB7Q3hgCz9KpVcl4B8pYfEB3tY3fITKvE",
  authDomain: "apar-motors.firebaseapp.com",
  projectId: "apar-motors",
  storageBucket: "apar-motors.appspot.com",
  messagingSenderId: "362937078561",
  appId: "1:362937078561:web:f603dd35e13e918216a460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth