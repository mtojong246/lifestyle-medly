// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { UserType } from "../Eligibility/page";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQEwq4NMZKFGW3D-Pj5ln_OZg7hwM1SKo",
  authDomain: "lifestyle-medly.firebaseapp.com",
  projectId: "lifestyle-medly",
  storageBucket: "lifestyle-medly.appspot.com",
  messagingSenderId: "227206258007",
  appId: "1:227206258007:web:d38140226800f52718f212",
  measurementId: "G-HP8R4XTVDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app)

export const addUser = async (data: UserType) => {
  const collectionRef = collection(db, 'users');

  try {

    const newDoc = await addDoc(collectionRef, data);
    const docRef = doc(db, 'users', newDoc.id);

    await updateDoc(docRef, {
      id: newDoc.id,
    })

    const docSnap = await getDoc(docRef);
    return docSnap.data();

  } catch (err: any) {

    console.log('Error adding user to userdoc', err);

  }
}

export const updateUser = async (data: UserType, id: string) => {
  const docRef = doc(db, 'users', id);

  try {

    await setDoc(docRef, data)

  } catch (err:any) {

    console.log('Error updating userdoc', err);

  }
}