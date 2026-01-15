import Project1 from './../../assets/anime.png'
import Project3 from './../../assets/DayTradeBookScreen.png'
import './projects.css'

interface SectionProps { 
  refProp: React.RefObject<HTMLDivElement | null>; 
}

function Projects({ refProp }: SectionProps) {

  const projects = [
    { 
      project: "Anime Login Page",
      image: Project1,
      description: 'The Creation of This Login Page was to solve a problem, its about impressing others and find out how to make an Anime-style login Page',
      tools: 'React - JavaScript',
      linkDeploy: 'https://project-login-page-eta.vercel.app/',
      linkGitHub: 'https://github.com/TuttaDaWeb/Project-Login-Screen'
    },{ 
      project: "Day Trade Book Landing Page", 
      image: Project3,
      description: 'The Development of this website was to solve a problem of an attracted client, They wanted a Landing Page for their Day Trade e-book',
      tools: 'HTML - CSS - React - JavaScript',
      linkDeploy: 'https://my-first-job-rho.vercel.app/',
      linkGitHub: 'https://github.com/TuttaDaWeb/My-First-Job' 
    }
  ]

  return (
    <div ref={refProp} className="projects-container">
      {projects.map((project) => (
        <div className='project-portfolio'key={project.project}>
          <img src={project.image} alt={project.project} />
          <h2>{project.project}</h2>
          <div className="portfolio-desc">
            <h5>{project.description}</h5>
          </div>
          <p>{project.tools}</p>
          <div className="links-redirect">
            <div className="github-redirect" onClick={() => window.open(project.linkGitHub)}>github</div>
            <div className="deployment-redirect" onClick={() => window.open(project.linkDeploy)}>see the project</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
