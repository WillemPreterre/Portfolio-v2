import "./Projects.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Website Coding",
      description: "HTML, CSS, JS",
      image: "/images/project1.jpg",
      link: "#"
    },
    {
      title: "Website Coding",
      description: "HTML, CSS, JS",
      image: "/images/project2.jpg",
      link: "#"
    },
    {
      title: "Website Coding",
      description: "HTML, CSS, JS",
      image: "/images/project3.jpg",
      link: "#"
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1 className="title">PORTFOLIO</h1>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <div className="card-image">
              <img src={p.image} alt={p.title} />
            </div>

            <div className="card-content">
              <p>{p.title}</p>
              <span>({p.description})</span>

              <a href={p.link} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;