import ChatBox from "../../components/ChatBox/ChatBox";
import LeftSide from "../../components/LeftSide/LeftSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Chat.css";
function Chat() {

    return ( <div className="chat">
        <div className="chat-container">
          <LeftSide/>
          <ChatBox/>
          <RightSide/>
        </div>
    </div> )
}

export default Chat;