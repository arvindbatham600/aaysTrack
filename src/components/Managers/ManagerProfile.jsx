import "./managerProfile.scss";
import ManagerProjects from "./ManagerProjects";


const ManagerProfile = ({ details }) => {
  console.log("in manager profile with details value", details)
    const { projects } = details;
    console.log(
        "jai ho projects", projects
    )
  return (
    <>
      <div id="manager-profile-box">
        <div className="profile-main">
          <div className="profile-body">
            <div className="left">
              <div className="avatar">
                <img src="https://shorturl.at/xAXZr" alt="" />
              </div>
              <div className="name">{details.name}</div>
              <div className="designation">{details.designation}</div>
              {/* <div className="rating">Rating: {details.rating}</div> */}
            </div>
            <div className="right">
              <div className="heading">Projects</div>

              <div className="container">
                {/* {projectsData.map((project) => (
                  <ProfileCard
                    role={role}
                    project={project}
                    key={project.name}
                  />
                ))} */}

                {projects.map((project) => (
                  < ManagerProjects key={project.id} project = {project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerProfile;