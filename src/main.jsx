import React from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Firestore from './componentes/Firestore.jsx'
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "proyecto-final-react---godoy.firebaseapp.com",
  projectId: "proyecto-final-react---godoy",
  storageBucket: "proyecto-final-react---godoy.firebasestorage.app",
  messagingSenderId: "414928964454",
  appId: "1:414928964454:web:26b5930af1d780467496a7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
