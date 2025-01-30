import { useState, useEffect } from "react";
// import axios from "axios";

import API from "../services/api";

const educationStyles = {
  width: "100vw",
  paddingBottom: "10px",
  padding: "1rem",
  backgroundColor: "black",
};

const descriptionStyles = {
  border: "1px inset green",
  margin: "0 auto",
  maxWidth: "100vw",
  width: "50%",
  maxHeight: "100vh",
  height: "auto",
};

const Education = () => {
  const [schoolData, setSchoolData] = useState([]);
  const [varsityData, setVarsityData] = useState([]);

  useEffect(() => {
    const fetchSchoolData = async () => {
      try {
        const response = await API.get("/school");
        setSchoolData(response.data);
      } catch (e) {
        console.error({ message: "Error fetching school data", e });
      }
    };
    fetchSchoolData();
  }, []);

  useEffect(() => {
    const fetchVarsityData = async () => {
      try {
        const response = await API.get("varsity");
        setVarsityData(response.data);
      } catch (e) {
        console.error({ message: "Error fetching varsity data", e });
      }
    };
    fetchVarsityData();
  }, []);

  return (
    <div style={educationStyles} id="education">
      <h1>
        <u>Academic Qualifications </u>
      </h1>
      {schoolData.map((item, index) => (
        <div key={index} style={descriptionStyles}>
          <h4> {item.title}</h4>
          <p> {item.institute}</p>
          <p> {item.board}</p>
          <p> {item.group}</p>
          <p> {item.year}</p>
          <p> {item.result}</p>
        </div>
      ))}

      {varsityData.map((item, index) => (
        <div key={index} style={descriptionStyles}>
          <h4> {item.title}</h4>
          <p> {item.institute}</p>
          <p> {item.department}</p>
          <p> {item.year}</p>
          <p> {item.duration}</p>
          <p> {item.result}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
