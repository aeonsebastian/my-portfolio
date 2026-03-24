import '../styles/Skills.css'

interface Skill {
  category: string
  items: string[]
}

function Skills() {
  const skills: Skill[] = [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js','SQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Tools & Technologies',
      items: ['Git & GitHub', 'VS Code', 'Postman', 'Vite'],
    },
    {
      category: 'Soft Skills',
      items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management', 'Attention to Detail'],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
