import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidenav.scss";
import GroupsIcon from "@mui/icons-material/Groups";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TaskIcon from "@mui/icons-material/Task";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import { useDispatch, useSelector } from "react-redux";

const AdminMenuData = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    id: 2,
    name: "Managers",
    icon: <ManageAccountsIcon />,
    path: "/managers",
  },
  {
    id: 3,
    name: "Employees",
    icon: <GroupsIcon />,
    path: "/employees",
  },
  {
    id: 4,
    name: "Projects",
    icon: <TaskIcon />,
    path: "/projects",
  },
  {
    id: 5,
    name: "Documents",
    icon: <DescriptionIcon />,
    path: "/documents",
  },
];
const ManagerMenuData = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    id: 2,
    name: "Employees",
    icon: <GroupsIcon />,
    path: "/employees",
  },
  {
    id: 3,
    name: "Projects",
    icon: <TaskIcon />,
    path: "/projects",
  },
  {
    id: 4,
    name: "Documents",
    icon: <DescriptionIcon />,
    path: "/documents",
  },
];
const EmployeeMenuData = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    id: 2,
    name: "Projects",
    icon: <TaskIcon />,
    path: "/projects",
  },
  {
    id: 3,
    name: "Documents",
    icon: <DescriptionIcon />,
    path: "/documents",
  },
];

const SideNavbar = () => {
  const navigate = useNavigate(); // Call useNavigate at the top level of the component

  const handleClick = (path) => {
    navigate(path); // Use the path to navigate
  };
  // const user = useSelector((state) => state.auth.user);
  // const role = user.role;
  const role = useSelector((state) => state.auth.role);

  let menuData;
  if (role === "Admin") {
    menuData = AdminMenuData
  } else if (role === "Manager") {
    menuData = ManagerMenuData;
  } else if (role === "Employee") {
    menuData = EmployeeMenuData;
  }


  return (
    <div id="sidebar-main">
      <div className="sidebar-body">
        <div className="profile-section">
          <div className="profile">
            <img
              className="profile-pic"
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380&t=st=1726432587~exp=1726433187~hmac=e65fedd0fa03adf3fab4c786f85b7c7c52a8532d66ca1c1b1246d9798da75067"
              alt="Profile"
            />
            <div className="name">AaysTrack</div>
            <div className="designation">Tech Titans</div>
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-section-body">
            {menuData.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.path)}
                className="menu"
              >
                <div className="icon">{item.icon}</div>
                <div className="menu-name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
