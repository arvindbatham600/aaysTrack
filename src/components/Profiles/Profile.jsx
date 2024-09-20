import ProfileCard from "./ProfileCard";
import "./profile.scss"
const projectsData = [
  {
    name: "Alpha Initiative",
    rating: 4.3,
    status: "In Progress",
  },
  {
    name: "Beta Revamp",
    rating: 3.5,
    status: "Completed",
  },
  {
    name: "Gamma Expansion",
    rating: 4.6,
    status: "Not Started",
  },
  {
    name: "Delta Optimization",
    rating: 2.9,
    status: "On Hold",
  },
  {
    name: "Epsilon Launch",
    rating: 4.4,
    status: "In Progress",
  },
];


const Profile = () => {
  return (
    <>
      <div className="profile-main">
        <div className="profile-body">
          <div className="left">
            <div className="avatar">
              <img src="https://shorturl.at/xAXZr" alt="" />
            </div>
            <div className="name">AAYSTrack</div>
            <div className="designation">Tech Titans</div>
            <div className="rating">Rating: 4.8</div>
          </div>
          <div className="right">
            <div className="heading">Projects</div>

            <div className="container">
              {projectsData.map((project) => (
                <ProfileCard project={project} key={project.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
