import Project1 from './../../assets/anime.png'
import Project3 from './../../assets/DayTradeBookScreen.png'
import Project4 from './../../assets/fictional-burger.png'
import './projects.css'

interface SectionProps { 
  refProp: React.RefObject<HTMLDivElement | null>; 
}

function Projects({ refProp }: SectionProps) {

  const projects = [
    { 
      project: "Anime Login Page",
      image: Project1,
      description: 'The Development of this demo landing Page suing React was meant to impress other people within a paid community, It emphazises the importance of starting off as a Developer',
      tools: 'React - JavaScript',
      linkDeploy: 'https://project-login-page-eta.vercel.app/',
      linkGitHub: 'https://github.com/TuttaDaWeb/Project-Login-Screen'
    },{ 
      project: "Day Trade Book Landing Page", 
      image: Project3,
      description: "The Complete Development of this website was to solve a problem for an attracted client that I could talk to and work for free, They wanted a Landing Page for their Day Trading e-book, I used technologies like React, JavaScript, in order to achieve freelancing mastery, Although the Client ended up ghosting me, The First Intetion for this Small React-built Landing Page was for a client's fulfillment",
      tools: 'HTML - CSS - React - JavaScript',
      linkDeploy: 'https://my-first-job-rho.vercel.app/',
      linkGitHub: 'https://github.com/TuttaDaWeb/My-First-Job' 
    },{ 
      project: "Fictional Burger Restaurant", 
      image: Project4,
      description: 'The Full Creation of this website was just a demosntration about Hard and Soft Skills to get me approved on freeelancing Platforms, Particularly Workana. One I was approved there, I continued to submit my applications there. Intionally, Workana admistrators must have enjoyed this restaurant landing page, because, thanks to it, I could finally manage to get approval on Workana or any other Latin American Freelancing Platform, taking roughly 2 days for developing this landing page.',
      tools: 'HTML - CSS - React - JavaScript',
      linkDeploy: 'https://fictional-burger.vercel.app/',
      linkGitHub: 'https://github.com/TuttaDaWeb/fictional-burger' 
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
            <div className="deployment-redirect" onClick={() => window.open(project.linkDeploy)}>live demo</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
