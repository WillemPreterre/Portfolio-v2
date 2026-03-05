function Projects() {
  const projects = [
    {
      title: "Sport Tracker App",
      description: "Application de suivi sportif avec React Native, Firebase et API Docker",
      link: "https://github.com/tongithub/sport-app"
    },
    {
      title: "Todo App",
      description: "Application pour gérer ses tâches",
      link: "https://github.com/tongithub/todo-app"
    },
    {
      title: "Weather App",
      description: "Application météo utilisant une API",
      link: "https://github.com/tongithub/weather-app"
    }
  ];

  return (
    <div className="page">
      <h1>Projets</h1>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer">Voir le projet</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;