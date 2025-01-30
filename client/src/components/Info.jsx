import { useEffect, useState } from "react";
// import axios from "axios";

import API from "../services/api";
import person from "../assets/image/person.png";

const Info = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await API.get("/info");
        setInfo(response.data);
      } catch (e) {
        console.error("Error fetching the data", e);
      }
    };
    fetchInfo();
  }, []);

  const infoStyle = {
    margin: "0 auto",
    width: "100vw",
    backgroundColor: "black",
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontSize: "1.5rem",
    textShadow: "2px 2px 0px black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "200px",
  };

  const iconStyles = {
    padding: "2px",
    marginTop: "20px",
  };

  return (
    <section id="info">
      {info.map((item) => (
        <div key={item.id} style={infoStyle}>
          <div className="img">
            <img
              src={person}
              alt="profile"
              style={{
                maxWidth: "100%",
                maxHeight: "300px",
                width: "auto",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
          <h2> {item.name}</h2>
          <p>
            <a
              href={`tel:${item.contact}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {item.contact}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${item.email}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {item.email}
            </a>
          </p>

          <div className="social-sites" style={iconStyles}>
            <a href={`mailto:${item.email}`}>
              <i
                className="fas fa-envelope"
                style={{
                  marginRight: "20px",
                  color: "transparent",
                  backgroundColor: "white",
                  borderRadius: "60%",
                  width: "50px",
                  height: "50px",
                  position: "relative",
                  top: "-5px",
                  alignContent: "center",
                }}
              ></i>
            </a>
            <a href={item.iconsLink[0].url}>
              <i
                className="fab fa-facebook fa-2x"
                style={{ marginRight: "20px", color: "white" }}
              ></i>
            </a>

            <a href={item.iconsLink[1].url}>
              <i
                className="fa-brands fa-github fa-2x"
                style={{ marginRight: "10px", color: "white" }}
              ></i>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Info;
