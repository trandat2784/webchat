import { Navigate, Route, Routes,useNavigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Chat from "./pages/Chat/Chat";
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { AppContext } from "./context/AppContext";

function App() {
  const Navigate= useNavigate()
  const {loadUserData}= useContext(AppContext)
  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user)
      {
        Navigate("/chat")
        await loadUserData(user.uid)
      }
      else {
        Navigate("/")

      }})
  },[])
  return (
    <>
    
     <ToastContainer/>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Profile" element={<ProfileUpdate />} />
      </Routes>
    </>
   
  );
}

export default App;
