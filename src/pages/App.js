import React from "react";
import "./App.css";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const App = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
      <Header />

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>
    </div>
  );
};

export default App;
