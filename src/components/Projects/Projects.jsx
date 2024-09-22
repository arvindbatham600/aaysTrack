import ProjectCard from "./ProjectCard";
import api from "../utils/api";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material"; // Import CircularProgress for loading indicator

const role = JSON.parse(localStorage.getItem("role"));

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [individualProject, setIndividualProject] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (role === "ADMIN") {
      fetchAllProjects();
    } else {
      fetchProjects();
    }
  }, []);

  const fetchProjects = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const { data } = await api.get("/user/projects");
      setIndividualProject(data.projects);
      console.log("individual project", data.projects);
    } catch (error) {
      alert("Error: " + error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  const fetchAllProjects = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const { data } = await api.get("/user/globalProjects");
      setProjectsData(data.users);
      console.log("all the projects", data.users);
    } catch (error) {
      alert("Error: " + error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  console.log("projects dataaaa", projectsData);
  console.log("individual project", individualProject);
  console.log("user role", role);

  return (
    <>
      <div className="projects-main">
        <div className="projects-body">
          {loading ? ( // Show loading spinner while fetching data
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <CircularProgress />
              <p>Loading Projects...</p>
            </div>
          ) : (
            <>
              {role === "ADMIN"
                ? projectsData.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                  ))
                : individualProject.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                  ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
