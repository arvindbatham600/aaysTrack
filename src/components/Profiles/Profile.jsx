import { useEffect, useState } from "react";
import api from "../utils/api";
import ProfileCard from "./ProfileCard";
import "./profile.scss";
import { useSelector } from "react-redux";

const Profile = () => {
  const [userProjectData, setUserProjectData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const details = user.userDetails || {};
  const role = details.role;

  useEffect(() => {
    getUserProjects();
  }, []);

  const getUserProjects = async () => {
    try {
      const response = await api.get("/user/projects");
      console.log("Response of projects:", response.data);
      setUserProjectData(response.data?.projects || []);
    } catch (error) {
      console.log("Error while fetching the projects:", error);
      // Optionally alert the user
      // alert("Error while fetching the projects");
    }
  };

  return (
    <div className="profile-main">
      <div className="profile-body">
        <div className="left">
          <div className="avatar">
            <img src="https://shorturl.at/xAXZr" alt="User Avatar" />
          </div>
          <div className="name">{details.name}</div>
          <div className="designation">{details.designation}</div>
          <div className="rating">Rating: {details.rating}</div>
        </div>
        <div className="right">
          <div className="heading">Projects</div>
          <div className="container">
            {userProjectData.length === 0 ? (
              <div>No projects found</div>
            ) : (
              userProjectData.map((project) => (
                <ProfileCard project={project} key={project.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
