const ProjectCard = ({ project }) => {
  const { name, status, members, rating } = project;
  return (
    <>
      <div className="project-card">
        <div className="top">
          <div className="heading">{name}</div>
          <div className="project-status">
            <span
              className={`status ${status === "pending" ? "yellow" : "green"}`}
            >
              {status}
            </span>
          </div>
        </div>
        <div className="project-members">
          {members.map((member, index) => (
            <img src={member.avatar} key={index} alt={member.name} />
          ))}
        </div>
        <div className="project-rating">
          <span>Rating: {rating}</span>
        </div>
        <button className="view-btn" >view</button>
      </div>
      
    </>
  );
};

export default ProjectCard;
