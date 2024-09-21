import ProfileCard from "./ProfileCard";
import "./profile.scss"
const projectsData = [
  {
    id: 1,
    name: "Alpha Initiative",
    rating: 4.3,
    status: "In Progress",
    manager: "alex",
    startDate: "5 jun 2023",
    endDate: "10 Dec 2023",
    employees: ["arvind", "manvi", "sanskriti"],
    employeeRating: [4.5, 2.2, 4.5],
    employeeReview: ["good", "He worked hard", "lazy"],
  },
  {
    id: 2,
    name: "Beta Revamp",
    rating: 3.5,
    status: "Completed",
    manager: "alex",
    startDate: "5 jun 2023",
    endDate: "10 Dec 2023",
    employees: ["arvind", "manvi", "sanskriti"],
    employeeRating: [4.5, 2.2, 4.5],
    employeeReview: ["good", "He worked hard", "lazy"],
  },
  {
    id:3,
    name: "Gamma Expansion",
    rating: 4.6,
    status: "Not Started",
    manager: "alex",
    startDate: "5 jun 2023",
    endDate: "10 Dec 2023",
    employees: ["arvind", "manvi", "sanskriti"],
    employeeRating: [4.5, 2.2, 4.5],
    employeeReview: ["good", "He worked hard", "lazy"],
  },
  {
    id:4,
    name: "Delta Optimization",
    rating: 2.9,
    status: "On Hold",
    manager: "alex",
    startDate: "5 jun 2023",
    endDate: "10 Dec 2023",
    employees: ["arvind", "manvi", "sanskriti"],
    employeeRating: [4.5, 2.2, 4.5],
    employeeReview: ["good", "He worked hard", "lazy"],
  },
  {
    id:5,
    name: "Epsilon Launch",
    rating: 4.4,
    status: "In Progress",
    manager: "alex",
    startDate: "5 jun 2023",
    endDate: "10 Dec 2023",
    employees: ["arvind", "manvi", "sanskriti"],
    employeeRating: [4.5, 2.2, 4.5],
    employeeReview: ["good", "He worked hard", "lazy"],
  },
];

import { useSelector } from "react-redux";


const Profile = () => {

  // const user = useSelector((state) => state.auth);
  // const role = user?.user?.userDetails?.role;
  // const details = user?.user?.userDetails;
  // console.log("this is in role", role);
  // console.log("userDetails", details);
  // const role = user.userDetails.role;
  const user = JSON.parse(localStorage.getItem("user"));
  const details = user.userDetails;
  const role = details.role;
  console.log("user in profile", user)
  console.log("user details in user", details)

  
  return (
    <>
      <div className="profile-main">
        <div className="profile-body">
          <div className="left">
            <div className="avatar">
              <img src="https://shorturl.at/xAXZr" alt="" />
            </div>
            <div className="name">{details.name}</div>
            <div className="designation">{details.designation}</div>
            <div className="rating">Rating: { details.rating}</div>
          </div>
          <div className="right">
            <div className="heading">Projects</div>

            <div className="container">
              {projectsData.map((project) => (
                <ProfileCard role = {role} project={project} key={project.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
