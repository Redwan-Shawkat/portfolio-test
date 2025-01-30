import { useState, useEffect } from "react";
// import axios from "axios";

import API from "../services/api";

import expressJs from "../assets/icons/expressJs.svg";
import mysql from "../assets/icons/mysql.svg";
import mongodb from "../assets/icons/mongodb.svg";
import vscode from "../assets/icons/vscode.svg";
import postman from "../assets/icons/postman.svg";

const skillsStyle = {
  width: "100vw",
  paddingBottom: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "5px",
  paddingBottom: "10px",
  backgroundColor: "black",
};

const Skills = () => {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const response = await API.get("/skill");
        setSkill(response.data);
      } catch (e) {
        console.error({ message: "Error fetching skills", e });
      }
    };
    fetchSkill();
  }, []);

  return (
    <div style={skillsStyle} id="skills">
      <h1
        style={{
          color: "white",
          marginBottom: "15px",
          textTransform: "uppercase",
          borderBottom: "1px solid red",
        }}
      >
        Skills
      </h1>
      <div
        className="language"
        style={{
          border: "1px solid white",
          marginBottom: "5px",
          height: "150px",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <h2 style={{ color: "white", marginRight: "50px" }}>Language: </h2>
        <i
          className="fa-brands fa-html5 fa-2xl"
          style={{ fontSize: "90px", color: "orange", marginRight: "20px" }}
        ></i>

        <i
          className="fa-brands fa-css3-alt fa-2xl"
          style={{ color: "#74C0FC", fontSize: "90px", marginRight: "20px" }}
        ></i>

        <i
          className="fa-brands fa-js fa-2xl"
          style={{ color: "yellow", fontSize: "90px", marginRight: "20px" }}
        ></i>

        <i
          className="fa-solid fa-c fa-2xl"
          style={{ color: "#00FF00", fontSize: "90px", marginRight: "20px" }}
        ></i>
      </div>
      <div
        className="framework"
        style={{
          border: "1px solid white",
          height: "150px",
          width: "80vw",
          marginBottom: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <h2 style={{ color: "white", marginRight: "50px" }}>Framework: </h2>

        <i
          className="fa-brands fa-bootstrap fa-2xl"
          style={{ color: "blue", fontSize: "90px", marginRight: "20px" }}
        ></i>

        <i
          className="fa-brands fa-react fa-2xl"
          style={{ color: "#74C0FC", fontSize: "90px", marginRight: "20px" }}
        ></i>

        <i
          className="fa-brands fa-node fa-2xl"
          style={{ color: "#008080", fontSize: "90px", marginRight: "20px" }}
        ></i>

        <img
          src={expressJs}
          alt="ExpressJs"
          style={{ width: "90px", height: "250px" }}
        />
      </div>
      <div
        className="database"
        style={{
          border: "1px solid white",
          height: "150px",
          width: "80vw",
          marginBottom: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <h2 style={{ color: "white", marginRight: "50px" }}>Database: </h2>

        <img
          src={mysql}
          alt="MySQL"
          style={{ width: "90px", height: "250px" }}
        />
        <img
          src={mongodb}
          alt="MpngoDB"
          style={{ width: "90px", height: "250px" }}
        />
      </div>
      <div
        className="tools"
        style={{
          border: "1px solid white",
          height: "150px",
          width: "80vw",
          marginBottom: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <h2 style={{ color: "white", marginRight: "50px" }}>Tools: </h2>

        <i
          className="fa-brands fa-git fa-2xl"
          style={{ color: "#63E6BE", fontSize: "90px", marginRight: "20px" }}
        ></i>
        <i
          className="fa-brands fa-github fa-2xl"
          style={{ fontSize: "90px", marginRight: "20px" }}
        ></i>
        <img
          src={vscode}
          alt="VSCode"
          style={{ width: "90px", height: "250px", marginRight: "20px" }}
        />
        <i
          className="fa-brands fa-figma fa-xl"
          style={{ color: "maroon", fontSize: "90px", marginRight: "20px" }}
        ></i>
        <img
          src={postman}
          alt="postman"
          style={{ width: "90px", height: "250px", marginRight: "20px" }}
        />
      </div>
    </div>
  );
};

export default Skills;
