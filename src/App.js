import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Chat from "./pages/Chat/Chat";
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path="/Profile" element={<ProfileUpdate />} />
    </Routes>
  );
}

export default App;
