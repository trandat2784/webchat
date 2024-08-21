import "./ChatBox.css";
import assets from "../../assets/assets";
function ChatBox() {
  return (
    <div className="chatbox">
      <div className="chat-user">
        <div className="User-info">
          <img src={assets.profile_img} alt="" className="user-avatar" />
          <p>
            Tran Dat
            <img src={assets.green_dot} alt="" />
          </p>
        </div>
        <img src={assets.help_icon} alt="" className="user-help" />
      </div>
      <div className="chat-msg">
            

      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send a message" className="chat-send"/>
        <div className="icons">
          <input type="file" id="image" hidden/>
          <label htmlFor="image" >
            <img src={assets.gallery_icon} alt="" className="icon-img"/>
          </label>
          <img src={assets.send_button} alt="" className="icon-send"/>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
