import Topbar from "../Navbar/Topbar";
import SideNavbar from "../Sidenav/SideNavbar";
import Home from "./Home";
import "./home.scss";

const HomeLayout = () => {
  return (
    <>
      <div id="homelayout-main">
        <Topbar />
        <SideNavbar />
        <Home />
      </div>
    </>
  );
};

export default HomeLayout;
