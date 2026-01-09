import Project1 from './../../assets/anime.png'
import Project2 from './../../assets/login screen.png'
import './projects.css'

interface SectionProps { 
  refProp: React.RefObject<HTMLDivElement | null>; 
}

function Projects({ refProp }: SectionProps) {

  const projects = [
    { project: "Anime Login Screen", image: Project1 },
    { project: "Minimalistic Login Screen", image: Project2 }
  ]

  return (
    <div ref={refProp} className="projects-container">
      {projects.map((project) => (
        <div className="project-portfolio" key={project.project}>
          <img src={project.image} alt={project.project} />
          <h2>{project.project}</h2>
        </div>
      ))}
    </div>
  )
}

export default Projects
