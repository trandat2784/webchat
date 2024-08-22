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
        <div className="s-msg">
          <img src={assets.profile_img} className="msg-img" alt="" />
          <div className="msg-seen">
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="r-msg">
          <p className="msg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            ipsa cupiditate itaque odio beatae animi eius eligendi enim in
            fugiat totam consequatur, labore et mo
          </p>
          <div className="msg-seen">
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Send a message" className="chat-send" />
        <div className="icons">
          <input type="file" id="image" hidden />
          <label htmlFor="image">
            <img src={assets.gallery_icon} alt="" className="icon-img" />
          </label>
          <img src={assets.send_button} alt="" className="icon-send" />
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
