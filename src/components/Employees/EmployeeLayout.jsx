import Topbar from "../Navbar/Topbar";
import SideNavbar from "../Sidenav/SideNavbar";
import "./employee.scss";
import Employees from "./Employees";

const EmployeeLayout = () => {
    return (
        <>
            <div id="employeeLayout-main" >
                <Topbar />
                <SideNavbar />
                <Employees />
         </div>
        </>
    )
}

export default EmployeeLayout;