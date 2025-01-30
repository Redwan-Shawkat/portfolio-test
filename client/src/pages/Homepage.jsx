import NavBar from "../components/NavBar";
import Info from "../components/Info";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Training from "../components/Training";
import Education from "../components/Education";
import Footer from "../components/Footer";

const Homepage = () => {
  const sections = [
    { id: "info", label: "Info" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "training", label: "Training" },
    { id: "education", label: "Education" },
  ];

  return (
    <div>
      <NavBar sections={sections} />
      <Info />
      <Skills />
      <Projects />
      <Experience />
      <Training />
      <Education />
      <Footer />
    </div>
  );
};

export default Homepage;
