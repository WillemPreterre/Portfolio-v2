import Contact from "../Contact/Contact";
import Presentation from "../Presentation/Presentation";
import Projects from "../Projects/Projects";

function Main() {
  return (
    <>
      <section id="home">
        <Presentation />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Main;