import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/Techstack";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="aboutDiv">
        <About />
      </div>
      <div>
        <TechStack />
      </div>

      <div className="projectsDiv">
        <ProjectList />
      </div>

      <Footer />
    </>
  );
}

export default App;
