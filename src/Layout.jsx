import { Outlet } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function Layout() {
  return (
    <>
      <Topbar />
      <div className="Container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}