import Topbar from "../Navbar/Topbar"
import SideNavbar from "../Sidenav/SideNavbar"
import Projects from "./Projects"
import "./projects.scss";


const ProjectLayout = () => {
    return (
        <>
            <div id="projectLayout-main" >
                <Topbar />
                <SideNavbar />
                <Projects />
        </div>
        </>
    )
}

export default ProjectLayout;;