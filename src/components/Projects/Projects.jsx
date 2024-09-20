import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    name: "Project 1",
    status: "pending",
    members: [
      { id: 1, name: "John Doe", avatar: "https://shorturl.at/xAXZr" },
      { id: 2, name: "Jane Doe", avatar: "https://shorturl.at/xAXZr" },
    ],
    rating: 4.5,
  },
  {
    id: 2,
    name: "Project 2",
    status: "completed",
    members: [
      { id: 3, name: "Bob Smith", avatar: "https://shorturl.at/xAXZr" },
      { id: 4, name: "Alice Johnson", avatar: "https://shorturl.at/xAXZr" },
    ],
    rating: 4.8,
  },
  {
    id: 3,
    name: "Project 3",
    status: "pending",
    members: [
      { id: 5, name: "Mike Brown", avatar: "https://shorturl.at/xAXZr" },
      { id: 6, name: "Emily Davis", avatar: "https://shorturl.at/xAXZr" },
    ],
    rating: 4.2,
  },
  {
    id: 4,
    name: "Project 4",
    status: "completed",
    members: [
      { id: 7, name: "Tom Harris", avatar: "https://shorturl.at/xAXZr" },
      { id: 8, name: "Sarah Lee", avatar: "https://shorturl.at/xAXZr" },
    ],
    rating: 4.9,
  },
  {
    id: 5,
    name: "Project 5",
    status: "pending",
    members: [
      { id: 9, name: "Kevin White", avatar: "https://shorturl.at/xAXZr" },
      { id: 10, name: "Lisa Nguyen", avatar: "https://shorturl.at/xAXZr" },
    ],
    rating: 4.1,
  },
  {
    id: 6,
    name: "Project 6",
    status: "completed",
    members: [
      { id: 11, name: "David Kim", avatar: "https://shorturl.at/xAXZr" },
      { id: 12, name: "Rachel Patel", avatar: "https://shorturl.at/xAXZr" },
    ],
    rating: 4.7,
  },
  {
    id: 7,
    name: "Project 7",
    status: "pending",
    members: [
      { id: 13, name: "Oliver Martin", avatar: "https://shorturl.at/xAXZr" },
      { id: 14, name: "Hannah Taylor", avatar: "https://shorturl.at/xAXZr" },
    ],
    rating: 4.3,
  },
  {
    id: 8,
    name: "Project 8",
    status: "completed",
    members: [
      { id: 15, name: "Benjamin Hall", avatar: "https://shorturl.at/xAXZr" },
      { id: 16, name: "Sophia Garcia", avatar: "https://shorturl.at/xAXZr" },
    ],
    rating: 4.6,
  },
  {
    id: 9,
    name: "Project 9",
    status: "pending",
    members: [
      { id: 17, name: "Alexander Brooks", avatar: "https://shorturl.at/xAXZr" },
      { id: 18, name: "Mia Sanchez", avatar: "https://shorturl.at/xAXZr" },
    ],
    rating: 4.4,
  },
  {
    id: 10,
    name: "Project 10",
    status: "completed",
    members: [
      { id: 19, name: "Ethan Thompson", avatar: "https://shorturl.at/xAXZr" },
      { id: 20, name: "Isabella Walker", avatar: "https://shorturl.at/xAXZr" },
    ],
    rating: 4.8,
  },
];


const Projects = () => {
  return (
    <>
      <div className="projects-main">
        <div className="projects-body">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
