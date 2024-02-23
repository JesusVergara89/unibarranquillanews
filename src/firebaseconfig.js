import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBf5s8IXxqS22rDXiVNQcMjZJU7eZ7Ceqo",
    authDomain: "newspaper-c31c9.firebaseapp.com",
    projectId: "newspaper-c31c9",
    storageBucket: "newspaper-c31c9.appspot.com",
    messagingSenderId: "396926969662",
    appId: "1:396926969662:web:cb21d40ff3b2e535ed2e6f",
    measurementId: "G-8Z13N9KH6Q"
};

const firebaseConfig2 = {
    apiKey: "AIzaSyDN_cdJmbx7so_e4L9JeSCp6wneMe--dvI",
    authDomain: "unibarranquillanewspaper-b3080.firebaseapp.com",
    projectId: "unibarranquillanewspaper-b3080",
    storageBucket: "unibarranquillanewspaper-b3080.appspot.com",
    messagingSenderId: "796425273333",
    appId: "1:796425273333:web:fd184f109746eec355eabc"
};

const app = initializeApp(firebaseConfig)
const app1 = initializeApp(firebaseConfig2, "app2");

export const storage = getStorage(app)
export const db = getFirestore(app)

export const storage1 = getStorage(app1)
export const db1 = getFirestore(app1)
export const auth = getAuth(app1)

