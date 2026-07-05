import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarManu">
          <h3 className="sidebarTitle">dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="Link">
              <li className="sidebarListItem active">
                <LineStyleIcon className="sidebarIcon" />
                Home
              </li>
            </Link>

            <Link to={"/analytics"} className="Link">
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </li>
            </Link>

            <Link to={"*"} className="Link">
              <li className="sidebarListItem">
                <TrendingUpIcon className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarManu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="Link">
              <li className="sidebarListItem active">
                <PermIdentityIcon className="sidebarIcon" />
                Users
              </li>
            </Link>

            <Link to="/newUser" className="Link">
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                New User
              </li>
            </Link>

            <Link to="/products" className="Link">
              <li className="sidebarListItem">
                <StorefrontIcon className="sidebarIcon" />
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <AttachMoneyIcon className="sidebarIcon" />
              Transeaction
            </li>
            <li className="sidebarListItem">
              <BarChartIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarManu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to={"/mail"} className="Link">
              <li className="sidebarListItem active">
                <MailOutlineOutlinedIcon className="sidebarIcon" />
                Mail
              </li>
            </Link>
            <Link to={"/analytics"} className="Link">
              <li className="sidebarListItem">
                <DynamicFeedOutlinedIcon className="sidebarIcon" />
                Analytics
              </li>
            </Link>

            <Link to={"/messages"} className="Link">
              <li className="sidebarListItem">
                <ChatBubbleOutlineOutlinedIcon className="sidebarIcon" />
                Messages
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarManu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <WorkOutlineOutlinedIcon className="sidebarIcon" />
              Manage
            </li>

            <Link to={"/analytics"} className="Link">
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                Analytics
              </li>
            </Link>
            <Link to={"/report"} className="Link">
              <li className="sidebarListItem">
                <ReportIcon className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
