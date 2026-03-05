function Home() {
  const skills = ["JavaScript", "React", "React Native", "Node.js", "Docker", "Firebase"];

  return (
    <div className="page">
      <section className="about">
        <h1>Salut 👋</h1>
        <h2>Je suis Développeur Web & Mobile</h2>
        <p>
          Passionné par le développement d’applications web et mobile. Je développe actuellement une application de suivi sportif avec React Native, Firebase et une API backend.
        </p>
      </section>

      <section className="skills">
        <h2>Compétences</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span className="skill" key={index}>{skill}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;