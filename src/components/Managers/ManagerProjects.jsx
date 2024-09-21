const ManagerProjects = ({project}) => {
  const role = JSON.parse(localStorage.getItem("role"));
  const { name, startDate, endDate, status, rating } = project;

  const statusColors = {
    ONGOING: { background: "blue", color: "white" },
    COMPLETED: { background: "green", color: "white" },
    PENDING: { background: "orange", color: "white" }, // Example for handling "Pending"
  };

  let ratingName;

  if (role === "EMPLOYEE") {
    ratingName = "Your";
  } else if (role === "MANAGER" || role === "ADMIN") {
    ratingName = "Project";
  }

  // Get the background and text color based on the status
  const { background, color } = statusColors[status] || {
    background: "black",
    color: "white",
  }; // Default color if status not in map

  return (
    <>
      <div className="project-box">
        <div className="project-name">
          <div>Project Name - </div>
          <div>{name}</div>
        </div>
        {/* <div className="project-rating">
          <div>{ratingName} Rating - </div>
          <div>{rating}</div>
        </div> */}
        <div className="project-status">
          <div>Status - </div>
          <div
            className="status"
            style={{ backgroundColor: background, color: color }}
          >
            {status}
          </div>
        </div>
        <button className="view-btn">view</button>
      </div>
    </>
  );
};

export default ManagerProjects;
