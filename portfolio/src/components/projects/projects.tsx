import Project1 from './../../assets/anime.png'
import Project2 from './../../assets/login screen.png'
import Project3 from './../../assets/DayTradeBookScreen.png'
import './projects.css'

interface SectionProps { 
  refProp: React.RefObject<HTMLDivElement | null>; 
}

function Projects({ refProp }: SectionProps) {

  const projects = [
    { 
      project: "Anime Login Screen",
      image: Project1,
      description: 'The Creation of This Login Page was to solve a problem, its about impressing others and find out how to make an Anime-style login Page',
      tools: 'React - JavaScript',
      link: 'https://github.com/TuttaDaWeb/Project-Login-Screen'
    },{ 
      project: "Minimalistic Login Screen", 
      image: Project2,
      description: 'This is one of my oldest projects, I developed it in order to simulated a login and register page, I also used frameworks I no longer use',
      tools: 'HTML - CSS - Python - Flask',
      link: 'https://github.com/TuttaDaWeb/Sistema-de-Login' 
    },{ 
      project: "Day Trade Book Landing Page", 
      image: Project3,
      description: 'The Development of this website was to solve a problem of an attracted client, They wanted a Landing Page for his Day Trade e-book',
      tools: 'HTML - CSS - React - JavaScript',
      link: 'https://github.com/TuttaDaWeb/My-First-Job' 
    }
  ]

  return (
    <div ref={refProp} className="projects-container">
      {projects.map((project) => (
        <div className='project-portfolio'key={project.project} onClick={() => window.open(project.link)}>
          <img src={project.image} alt={project.project} />
          <h2>{project.project}</h2>
          <div className="portfolio-desc">
            <h5>{project.description}</h5>
          </div>
          <p>{project.tools}</p>
        </div>
      ))}
    </div>
  )
}

export default Projects
