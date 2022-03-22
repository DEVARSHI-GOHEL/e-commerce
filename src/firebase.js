import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { getFirestore } from '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyC3JITzWziRRlO0mnvd2l6_z8rjw2pIlco",
    authDomain: "ecomm-5d824.firebaseapp.com",
    databaseURL: "https://ecomm-5d824-default-rtdb.firebaseio.com",
    projectId: "ecomm-5d824",
    storageBucket: "ecomm-5d824.appspot.com",
    messagingSenderId: "429489377602",
    appId: "1:429489377602:web:c2c3f30fdbb75b3a8878db"
})

export const auth = app.auth()
export default app
export const db = getFirestore(app);