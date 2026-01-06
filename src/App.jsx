import "./App.css";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer/>
    </>
  );
}

export default App;
