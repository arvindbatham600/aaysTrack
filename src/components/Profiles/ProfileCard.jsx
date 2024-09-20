const ProfileCard = ({ project }) => {
  const { name, rating, status } = project;

  // Define status-to-color mapping
  const statusColors = {
    "In Progress": { background: "blue", color: "white" },
    Completed: { background: "green", color: "white" },
    "Not Started": { background: "gray", color: "white" },
    "On Hold": { background: "yellow", color: "black" },
    Pending: { background: "orange", color: "white" }, // Example for handling "Pending"
  };

  // Get the background and text color based on the status
  const { background, color } = statusColors[status] || {
    background: "black",
    color: "white",
  }; // Default color if status not in map

  return (
    <div className="project-box">
      <div className="project-name">
        <div>Project Name - </div>
        <div>{name}</div>
      </div>
      <div className="project-rating">
        <div>Your Rating - </div>
        <div>{rating}</div>
      </div>
      <div className="project-status">
        <div>Status - </div>
        <div className="status"  style={{ backgroundColor: background, color: color }}>
          {status}
        </div>
      </div>
      <button onClick={() => alert("jai ho")} className="view-btn">
        view
      </button>
    </div>
  );
};

export default ProfileCard;
