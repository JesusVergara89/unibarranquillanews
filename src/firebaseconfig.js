import { initializeApp } from 'firebase/app'
import { browserSessionPersistence, getAuth, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_APP_MEASUMENTID
};

const firebaseConfig2 = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY1,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN1,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID1,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET1,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID1,
    appId: import.meta.env.VITE_FIREBASE_APP_ID1,
};

const firebaseConfig31 = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY2,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN2,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID2,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET2,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID2,
    appId: import.meta.env.VITE_FIREBASE_APP_ID2,
};

const firebaseConfig4 = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY3,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN3,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID3,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET3,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID3,
    appId: import.meta.env.VITE_FIREBASE_APP_ID3,
};

const firebaseConfig5 = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY4,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN4,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID4,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET4,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID4,
    appId: import.meta.env.VITE_FIREBASE_APP_ID4,
};

const firebaseConfig6 = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY5,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN5,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID5,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET5,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID5,
    appId: import.meta.env.VITE_FIREBASE_APP_ID5,
};

const firebaseConfig7 = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY6,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN6,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID6,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET6,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID6,
    appId: import.meta.env.VITE_FIREBASE_APP_ID6,
};

const firebaseConfig8 = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY7,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN7,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID7,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET7,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID7,
    appId: import.meta.env.VITE_FIREBASE_APP_ID7,
};

const firebaseConfig9 = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY8,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN8,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID8,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET8,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID8,
    appId: import.meta.env.VITE_FIREBASE_APP_ID8,
};

const firebaseConfig10 = {    
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY9,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN9,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID9,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET9,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID9,
    appId: import.meta.env.VITE_FIREBASE_APP_ID9,
};

const firebaseConfig11 = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY10,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN10,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID10,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET10,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID10,
    appId: import.meta.env.VITE_FIREBASE_APP_ID10,
};

const firebaseConfig12 = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY11,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN11,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID11,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET11,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID11,
    appId: import.meta.env.VITE_FIREBASE_APP_ID11,
};

const firebaseConfig13 = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY12,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN12,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID12,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET12,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID12,
    appId: import.meta.env.VITE_FIREBASE_APP_ID12,
};


const app = initializeApp(firebaseConfig)
const app1 = initializeApp(firebaseConfig2, "app2");


export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth1 = getAuth(app)

export const storage1 = getStorage(app1)
export const db1 = getFirestore(app1)
export const auth = getAuth(app1)

//from here are the DB that í´ll use it=>
//
///
const app2 = initializeApp(firebaseConfig31, "app31");
export const storage2 = getStorage(app2)
export const db2 = getFirestore(app2)
export const auth2 = getAuth(app2)
//Configuración para mantener activo la sesión
setPersistence(auth2, browserSessionPersistence)
/////////////////////////////////////////////

const app3 = initializeApp(firebaseConfig4, "app4");
export const storage3 = getStorage(app3)
export const db3 = getFirestore(app3)
export const auth3 = getAuth(app3)

/////////////////////////////////////////////////

const app4 = initializeApp(firebaseConfig5, "app5");
export const storage4 = getStorage(app4)
export const db4 = getFirestore(app4)
export const auth4 = getAuth(app4)

////////////////////////////////////////////////

const app5 = initializeApp(firebaseConfig6, "app6");
export const storage5 = getStorage(app5)
export const db5 = getFirestore(app5)
export const auth5 = getAuth(app5)

/////////////////////////////////////////////

const app6 = initializeApp(firebaseConfig7, "app7");
export const storage6 = getStorage(app6)
export const db6 = getFirestore(app6)
export const auth6 = getAuth(app6)

/////////////////////////////////////////////

const app7 = initializeApp(firebaseConfig8, "app8");
export const storage7 = getStorage(app7)
export const db7 = getFirestore(app7)
export const auth7 = getAuth(app7)

////////////////////////////////////////////

const app8 = initializeApp(firebaseConfig9, "app9");
export const storage8 = getStorage(app8)
export const db8 = getFirestore(app8)
export const auth8 = getAuth(app8)

////////////////////////////////////////////

const app9 = initializeApp(firebaseConfig10, "app10");
export const storage9 = getStorage(app9)
export const db9 = getFirestore(app9)
export const auth9 = getAuth(app9)

////////////////////////////////////////////

const app10 = initializeApp(firebaseConfig11, "app11");
export const storage10 = getStorage(app10)
export const db10 = getFirestore(app10)
export const auth10 = getAuth(app10)

////////////////////////////////////////////

const app11 = initializeApp(firebaseConfig12, "app12");
export const storage11 = getStorage(app11)
export const db11 = getFirestore(app11)
export const auth11 = getAuth(app11)

////////////////////////////////////////////

const app12 = initializeApp(firebaseConfig13, "app13");
export const storage12 = getStorage(app12)
export const db12 = getFirestore(app12)
export const auth12 = getAuth(app12)