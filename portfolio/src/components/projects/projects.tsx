import Project1 from './../../assets/anime.png'
import Project2 from './../../assets/login screen.png'
import './projects.css'

interface SectionProps { 
  refProp: React.RefObject<HTMLDivElement | null>; 
}

function Projects({ refProp }: SectionProps) {

  const projects = [
    { project: "Anime Login Screen", image: Project1, link: 'https://github.com/TuttaDaWeb/Project-Login-Screen' },
    { project: "Minimalistic Login Screen", image: Project2, link: 'https://github.com/TuttaDaWeb/Sistema-de-Login' }
  ]

  return (
    <div ref={refProp} className="projects-container">
      {projects.map((project) => (
        <div className={`project-portfolio`} key={project.project} onClick={() => window.open(project.link)}>
          <img src={project.image} alt={project.project} />
          <h2>{project.project}</h2>
        </div>
      ))}
    </div>
  )
}

export default Projects
