function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    "Docker",
    "Firebase"
  ];

  return (
    <div className="page">
      <h1>Compétences</h1>

      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;