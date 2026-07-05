import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMemebers } from "../../datas";

export default function widgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">

        {newMemebers.map(user => (
          <li className="widgetSmListItem" key={user.id}>
            <img src={user.img} className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.userName}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
        
      </ul>
    </div>
  );
}
