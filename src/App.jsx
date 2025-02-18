import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  );
}

export default App;
