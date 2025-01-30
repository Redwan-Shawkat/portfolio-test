import { useEffect, useState } from "react";
import axios from "axios";

const experienceStyles = {
  backgroundColor: "black",
  margin: "0 auto",
  width: "100vw",
  paddingBottom: "200px",
};

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/experience"
        );
        setExperiences(response.data);
      } catch (e) {
        console.error({ message: "Error fetching experiences", e });
      }
    };
    fetchExperiences();
  });
  return (
    <div style={experienceStyles} id="experience">
      <h1>
        <u> EXPERIENCE </u>
      </h1>

      {experiences.map((experience) => (
        <div
          key={experience.id}
          style={{
            maxWidth: "550px",
            width: "100%",
            margin: "0 auto",
            fontFamily: "Helvetica",
            fontSize: "1.2rem",
            lineHeight: "1.5",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            padding: "1rem",
          }}
        >
          <q style={{}}>{experience.description}</q>
        </div>
      ))}
    </div>
  );
};

export default Experience;
