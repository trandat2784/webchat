import "./ProfileUpdate.css";
import assets from "../../assets/assets";
import { useState } from "react";
function ProfileUpdate() {
    const [image, setImage]= useState(false)
   
  return (
    <div className="profile">
      <div className="profile-update">
        <form action="">
          <h2>Profile Detail</h2>
          <label htmlFor="avatar">
            <input type="file" id="avatar" onChange={(e)=>setImage(e.target.files[0])} accept=".png ,.jpg" hidden />
            <img src={image? URL.createObjectURL(image): assets.avatar_icon} alt="" />
            Upload profile image
          </label>
          <input type="text" placeholder="Your name" required />
          <textarea
            name=""
            placeholder="Write profile bio"
            id=""
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
