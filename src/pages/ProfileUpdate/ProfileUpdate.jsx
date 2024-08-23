import "./ProfileUpdate.css";
import assets from "../../assets/assets";
import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import uploadFile from "../../lib/uploadfile";
import { AppContext } from "../../context/AppContext";
function ProfileUpdate() {
  const navigate = useNavigate();
  const { setUserData } = useContext(AppContext);
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [uid, setUid] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUid(user.uid);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.data().name) {
          setName(docSnap.data().name);
        }
        if (docSnap.data().bio) {
          setBio(docSnap.data().bio);
        }
        if (docSnap.data().avatar) {
          setAvatar(docSnap.data().avatar);
        }
      } else {
        navigate("/");
      }
    });
  }, []);
  const profileUpdate = async (e) => {
    e.preventDefault();
    try {
      if (!avatar && !image) toast.error("Upload your picture");
      const docRef = doc(db, "users", uid);
      if (image) {
        const imgURL = await uploadFile(image);
        setAvatar(imgURL);
        await updateDoc(docRef, {
          avatar: imgURL,
          bio: bio,
          name: name,
        });
      } else {
        await updateDoc(docRef, {
          bio: bio,
          name: name,
        });
      }
      const snap = getDoc(docRef);
      setUserData(snap.data());
      navigate("/chat");
    } catch (error) {}
  };
  return (
    <div className="profile">
      <div className="profile-update">
        <form action="" onSubmit={profileUpdate}>
          <h2>Profile Detail</h2>
          <label htmlFor="avatar">
            <input
              type="file"
              id="avatar"
              onChange={(e) => setImage(e.target.files[0])}
              accept=".png ,.jpg"
              hidden
            />
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : avatar
                  ? avatar
                  : assets.avatar_icon
              }
              alt=""
            />
            Upload profile image
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Your name"
            required
          />
          <textarea
            name=""
            placeholder="Write profile bio"
            id=""
            onChange={(e) => setBio(e.target.value)}
            required
          ></textarea>
          <button type="submit">Save</button>
        </form>
        <img src={assets.logo_icon} alt="" />
      </div>
    </div>
  );
}

export default ProfileUpdate;
