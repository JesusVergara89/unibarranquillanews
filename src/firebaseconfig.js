import { initializeApp } from 'firebase/app'
import { browserSessionPersistence, getAuth, setPersistence } from 'firebase/auth';
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

const firebaseConfig31 = {
    apiKey: "AIzaSyDxTJYURmjO5rkYTWz7UODBoLG8sTvWCFU",
    authDomain: "actualidaddb-41990.firebaseapp.com",
    projectId: "actualidaddb-41990",
    storageBucket: "actualidaddb-41990.appspot.com",
    messagingSenderId: "112019430298",
    appId: "1:112019430298:web:7d875259dc6cf3e673f823"
};

const firebaseConfig4 = {
    apiKey: "AIzaSyCf2pn-_568_R9MuAwHvoyLjE7QsFCnHEg",
    authDomain: "culturadb-41c10.firebaseapp.com",
    projectId: "culturadb-41c10",
    storageBucket: "culturadb-41c10.appspot.com",
    messagingSenderId: "627139617421",
    appId: "1:627139617421:web:92a9579e3a9bb53091f8c4"
};

const firebaseConfig5 = {
    apiKey: "AIzaSyBP_PDy-pLhKJSxQM23EUcYEshjCKK9iTc",
    authDomain: "deportesdb-fcc27.firebaseapp.com",
    projectId: "deportesdb-fcc27",
    storageBucket: "deportesdb-fcc27.appspot.com",
    messagingSenderId: "139042021151",
    appId: "1:139042021151:web:f9c6e25d1d847e6bb01a2a"
};

const firebaseConfig6 = {
    apiKey: "AIzaSyBSrY0ppTnTTeHe30PLF6lcvVYAykQG8ao",
    authDomain: "investigaciondb-9131c.firebaseapp.com",
    projectId: "investigaciondb-9131c",
    storageBucket: "investigaciondb-9131c.appspot.com",
    messagingSenderId: "1082833559245",
    appId: "1:1082833559245:web:5a5fab472300259fb69384"
};

const firebaseConfig7 = {
    apiKey: "AIzaSyDbFFqo8honsuZwCQ45aj5awWzU8jvTEJQ",
    authDomain: "universidaddb-bc431.firebaseapp.com",
    projectId: "universidaddb-bc431",
    storageBucket: "universidaddb-bc431.appspot.com",
    messagingSenderId: "310730111716",
    appId: "1:310730111716:web:31db7d0cb28454395b4af1"
};

const firebaseConfig8 = {
    apiKey: "AIzaSyAh4cKlYUTeItncjMb2Aq160icOS7hxWxY",
    authDomain: "vidadb-301dd.firebaseapp.com",
    projectId: "vidadb-301dd",
    storageBucket: "vidadb-301dd.appspot.com",
    messagingSenderId: "729396491507",
    appId: "1:729396491507:web:8bd84df37afd82c6d07386"
};

const firebaseConfig9 = {
    apiKey: "AIzaSyA470tF1fuwrv42NMp_Ge69--iEAk3d6eI",
    authDomain: "eventosdb-63b36.firebaseapp.com",
    projectId: "eventosdb-63b36",
    storageBucket: "eventosdb-63b36.appspot.com",
    messagingSenderId: "459105791918",
    appId: "1:459105791918:web:2ed583a1d1b73c1223a23f"
};

const firebaseConfig10 = {
    apiKey: "AIzaSyALIDJmKNCZoqWMi7YnIUNT180jiKV-WW8",
    authDomain: "entrevistadb-257c2.firebaseapp.com",
    projectId: "entrevistadb-257c2",
    storageBucket: "entrevistadb-257c2.appspot.com",
    messagingSenderId: "147990209125",
    appId: "1:147990209125:web:a6dc8c0c128b11ab069c8c"
};

const firebaseConfig11 = {
    apiKey: "AIzaSyDV780qkp7HNRUANoUhj0VaE_raLwPefLU",
    authDomain: "tecnologiadb-f1e80.firebaseapp.com",
    projectId: "tecnologiadb-f1e80",
    storageBucket: "tecnologiadb-f1e80.appspot.com",
    messagingSenderId: "397578817382",
    appId: "1:397578817382:web:c75140ebfdd6e75d4842a7"
};

const firebaseConfig12 = {
    apiKey: "AIzaSyC5mM4j5PxZMzHYlF6t14Uy9X_J5N6gFu4",
    authDomain: "ambiente-a20cb.firebaseapp.com",
    projectId: "ambiente-a20cb",
    storageBucket: "ambiente-a20cb.appspot.com",
    messagingSenderId: "342410199017",
    appId: "1:342410199017:web:f00e334e27309e1fbf5578"
  };

  const firebaseConfig13 = { 
    apiKey: "AIzaSyBGsMYpmyRikdbq8uippz5LiqjeHIOAR-M", 
    authDomain: "sciences-c92c4.firebaseapp.com", 
    projectId: "sciences-c92c4", 
    storageBucket: "sciences-c92c4.appspot.com", 
    messagingSenderId: "490782936753", 
    appId: "1:490782936753:web:ab94407e7baf0f5d881c90" 
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