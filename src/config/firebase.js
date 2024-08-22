import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCV5vbfn89329Sf8CtvKxTM41hMTEHFRFI",
  authDomain: "webchat-b836a.firebaseapp.com",
  projectId: "webchat-b836a",
  storageBucket: "webchat-b836a.appspot.com",
  messagingSenderId: "363396179185",
  appId: "1:363396179185:web:107e4cca929fa1bf8cf550",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const  SignUp = async (username,email, password)=>{
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password)
    const user = res.user;
    setDoc(doc(db,"users",user.uid),{
      id:user.uid,
      username: username.toLowerCase(),
      email,
      name:"",
      avatar:"",
      bio:"Hey there i am using chat ",
      lastSeen:Date.now(),

    });
    setDoc(doc(db,"chats",user.uid),{
       chatData:[]
    })
    toast.success("Tao acc thanh cong ")
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
}
const LogIn = async (email, password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password)
    toast.success("Dang nhap thanh cong ")
  } catch (error) {
    toast.error(error.message);
  }
}
const LogOut= async ()=>{
  try {
    await signOut(auth)
    toast.success("Dang xuat thanh cong ")
  } catch (error) {
    toast.error(error.message);
  }
}
export {SignUp,LogIn,LogOut,auth}