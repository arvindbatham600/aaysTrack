import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidenav.scss";
import GroupsIcon from "@mui/icons-material/Groups";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TaskIcon from "@mui/icons-material/Task";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";

const AdminMenuData = [
  { id: 1, name: "Home", icon: <HomeIcon />, path: "/home" },
  { id: 2, name: "Managers", icon: <ManageAccountsIcon />, path: "/managers" },
  { id: 3, name: "Employees", icon: <GroupsIcon />, path: "/employees" },
  { id: 4, name: "Projects", icon: <TaskIcon />, path: "/projects" },
  { id: 5, name: "Documents", icon: <DescriptionIcon />, path: "/documents" },
];

const ManagerMenuData = [
  { id: 1, name: "Home", icon: <HomeIcon />, path: "/home" },
  // { id: 2, name: "Employees", icon: <GroupsIcon />, path: "/employees" },
  { id: 2, name: "Projects", icon: <TaskIcon />, path: "/projects" },
  { id: 3, name: "Documents", icon: <DescriptionIcon />, path: "/documents" },
];

const EmployeeMenuData = [
  { id: 1, name: "Home", icon: <HomeIcon />, path: "/home" },
  // { id: 2, name: "Projects", icon: <TaskIcon />, path: "/projects" },
  { id: 2, name: "Documents", icon: <DescriptionIcon />, path: "/documents" },
];

const SideNavbar = () => {
  const navigate = useNavigate();
  const localUser = JSON.parse(localStorage.getItem("user")) || {};
  const { role, name, designation } = localUser.userDetails || {};

  let menuData;
  if (role === "ADMIN") {
    menuData = AdminMenuData;
  } else if (role === "MANAGER") {
    menuData = ManagerMenuData;
  } else if (role === "EMPLOYEE") {
    menuData = EmployeeMenuData;
  }

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div id="sidebar-main">
      <div className="sidebar-body">
        <div className="profile-section">
          <div className="profile">
            <img
              className="profile-pic"
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1380"
              alt="Profile"
            />
            <div className="name">{name || "User"}</div>
            <div className="designation">{designation || "Designation"}</div>
          </div>
        </div>

        <div className="menu-section">
          <div className="menu-section-body">
            {menuData?.map((item) => (
              <div
                key={item.id}
                onClick={() => handleClick(item.path)}
                className="menu"
                aria-label={item.name}
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
