import Topbar from "../Navbar/Topbar";
import SideNavbar from "../Sidenav/SideNavbar";
import Managers from "./Managers";
import "./managers.scss";

const ManagersLayout = () => {
  return (
    <>
      <div id="managersLayout-main">
        <Topbar />
        <SideNavbar />
        <Managers />
      </div>
    </>
  );
};

export default ManagersLayout;
