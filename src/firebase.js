// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYRStS7sLbwA-Rb2yo0tKNzLkVEkl06cI',
  authDomain: 'candoit-cc12d.firebaseapp.com',
  projectId: 'candoit-cc12d',
  storageBucket: 'candoit-cc12d.appspot.com',
  messagingSenderId: '1011893229969',
  appId: '1:1011893229969:web:bdade00166de965e296230',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
