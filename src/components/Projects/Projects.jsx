import ProjectCard from "./ProjectCard";
import api from "../utils/api";
import { useEffect } from "react";
import { useState } from "react";

const role = JSON.parse(localStorage.getItem("role"));

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [individualProject, setIndividualProject] = useState([]);

  useEffect(() => {
    if (role === "ADMIN") {
      fetchAllProjects();
    } else {
      fetchProjects();
    }
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await api.get("/user/projects");
      setIndividualProject(data.projects);
      console.log("individual project", data.projects);
    } catch (error) {
      alert("error", error);
    }
  };

  const fetchAllProjects = async () => {
    try {
      const { data } = await api.get("/user/globalProjects");
      setProjectsData(data.users);
      console.log("all the projects", data.users);
    } catch (error) {
      alert("error", error);
    }
  };

  console.log("projects dataaaa", projectsData);
  console.log("individual project", individualProject);
  console.log("usr role", role)
  return (
    <>
      <div className="projects-main">
        <div className="projects-body">
          {role === "ADMIN"
            ? projectsData.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))
            : individualProject.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
