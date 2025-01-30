import { useEffect, useState } from "react";
import axios from "axios";

// import portfolio from "../assets/sites/portfolio";
// import camping from "../assets/sites/Cabin Booking";
// import dashboard from "../assets/sites/Digital Dashboard";
// import weather from "../assets/sites/Weather App";

const projectStyles = {
  backgroundColor: "black",
  width: "100vw",
  paddingBottom: "200px",
  paddingTop: "200px",
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/project");
        setProjects(response.data);
      } catch (e) {
        console.error({ message: "Error fetching projects", e });
      }
    };
    fetchProjects();
  }, []);

  return (
    <div style={projectStyles} id="projects">
      <h1>
        <u> PROJECTS </u>
      </h1>

      {projects.map((project) => (
        <div key={project.id} style={{}}>
          <h2 style={{ color: "red" }}> {project.title}</h2>
          <p>{project.description}</p>
          <div className="linkDocx" style={{}}>
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                borderBottom: "1px dotted blue",
              }}
            >
              GitHub Repository
            </a>
            <span> - </span>
            <a
              href={project.video}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                borderBottom: "1px dotted blue",
              }}
            >
              Video
            </a>
            <span> - </span>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                borderBottom: "1px dotted blue",
              }}
            >
              Live
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
