import { initializeApp } from 'firebase/app'
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

const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)
export const db = getFirestore(app)

