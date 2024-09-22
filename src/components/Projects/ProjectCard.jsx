const ProjectCard = ({ project }) => {
  console.log("in the proejct card", project)
  const name = project.name;
  const status = project.status;
  const rating = project.rating || 0;

  console.log("updated data", name, status, rating)

    const statusColors = {
      ONGOING: { background: "blue", color: "white" },
      COMPLETED: { background: "green", color: "white" },
      PENDING: { background: "orange", color: "white" }, // Example for handling "Pending"
    };
  
    const { background, color } = statusColors[status] || {
      background: "black",
      color: "white",
    }; 
  
  return (
    <>
      <div className="project-card">
        <div className="top">
          <div className="heading">{name}</div>
          <div className="project-status">
            <span
              className={`status ${status === "pending" ? "yellow" : "green"}`}
              style={{ backgroundColor: background, color: color }}
            >
              {status}
            </span>
          </div>
        </div>
        {/* <div className="project-members">
          {members.map((member, index) => (
            <img src={member.avatar} key={index} alt={member.name} />
          ))}
        </div> */}
        <div className="project-rating">
          <span>Rating: {rating}</span>
        </div>
        <button className="view-btn">view</button>
      </div>
    </>
  );
};

export default ProjectCard;
