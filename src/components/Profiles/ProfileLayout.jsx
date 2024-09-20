import Topbar from "../Navbar/Topbar";
import SideNavbar from "../Sidenav/SideNavbar";
import Profile from "./Profile";
import "./profile.scss";

const ProfileLayout = () => {
    return (
        <>
            <div id="profileLayout-main">
                <Topbar />
                <SideNavbar />
                <Profile />
            </div>
        </>
    )
}

export default ProfileLayout;