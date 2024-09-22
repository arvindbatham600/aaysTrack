import ProjectCard from "./ProjectCard";

import api from "../utils/api";
import { useEffect } from "react";
import { useState } from "react";

const Projects = () => {

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    fetchAllProjects();
  }, []);

  const fetchAllProjects = async () => {
    const { data } = await api.get("/user/globalProjects");
    setProjectsData(data.users);
    console.log("all the projects", data.users);
  };

  console.log("projects dataaaa", projectsData)
  return (
    <>
      <div className="projects-main">
        <div className="projects-body">
          {projectsData.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
