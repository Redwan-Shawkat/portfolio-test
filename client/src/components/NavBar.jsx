import { useEffect, useState } from "react";

const NavBar = ({ sections }) => {
  const [scrollingSection, setScrollingSection] = useState("info");

  const handleScrollSection = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      setScrollingSection(sectionId);
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const NavStyle = {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "200px",
  };

  return (
    <nav style={NavStyle}>
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={(e) => {
            handleScrollSection(e, id);
          }}
          style={{ backgroundColor: "black" }}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
