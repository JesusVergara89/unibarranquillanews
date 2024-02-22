import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDN_cdJmbx7so_e4L9JeSCp6wneMe--dvI",
    authDomain: "unibarranquillanewspaper-b3080.firebaseapp.com",
    projectId: "unibarranquillanewspaper-b3080",
    storageBucket: "unibarranquillanewspaper-b3080.appspot.com",
    messagingSenderId: "796425273333",
    appId: "1:796425273333:web:fd184f109746eec355eabc"
};

const App = initializeApp(firebaseConfig)

export const Storage = getStorage(App)

export const db = getFirestore(App)







