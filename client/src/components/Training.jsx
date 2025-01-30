import { useState, useEffect } from "react";
// import axios from "axios";
import API from "../services/api";

const trainingStyle = {
  backgroundColor: "black",
  width: "100vw",
  margin: "0 auto",
  paddingBottom: "200px",
};

const Training = () => {
  const [trainingData, setTrainingData] = useState([]);

  useEffect(() => {
    const fetchTrainingData = async () => {
      try {
        const response = await API.get("/training");
        setTrainingData(response.data);
      } catch (e) {
        console.error({ message: "Error fetching training data", e });
      }
    };
    fetchTrainingData();
  }, []);
  return (
    <div style={trainingStyle} id="training">
      <h1 style={{ textAlign: "center" }}>
        <u> TRAINING </u>
      </h1>
      {trainingData.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "10px",
            border: "1px solid white",
            // display: "inline-block",
            margin: "0 auto",
            width: "48%",
            padding: "10px",

            verticalAlign: "top",
          }}
        >
          <q> {item.title}</q>
          <p> {item.name}</p>
          <p> {item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Training;
