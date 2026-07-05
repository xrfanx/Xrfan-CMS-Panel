import MobileNumberBox from "../../components/MobileNumberBox/MobileNumberBox";
import "./Messages.css";
import { Link } from "react-router-dom";

export default function Messages() {
  return (
    <div className="messages">
      <div className="messagesTop">
        <span>Set Country:</span>
        <MobileNumberBox />
      </div>

      <div className="messagesButtom">
        <span className="messagesTitle">Phone Number:</span>
        <input
          type="text"
          className="messagesInput"
          placeholder="Phone Number"
        />
      </div>
      <Link to="*" className="Link">
        <button className="messagesButton">Send</button>
      </Link>
    </div>
  );
}
