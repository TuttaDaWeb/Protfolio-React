import EnglishIcon from './../../assets/englishIcon.webp'
import JavaScriptIcon from './../../assets/javascript icon.webp'
import ReactIcon from './../../assets/reactIcon.png'
import TypeScriptIcon from './../../assets/typescript.webp'
import HTMLIcon from './../../assets/html-icon.webp'
import GitIcon from './../../assets/git-icon-logo.webp'
import VercelIcon from './../../assets/vercel.webp'
import PortugueseIcon from './../../assets/portugueseIcon.webp'
import ViteIcon from './../../assets/vite-icon.png'
import LinuxIcon from './../../assets/Icons8_flat_linux.svg.png'
import NodejsIcon from './../../assets/nodejsicon.webp'
import ExpressJs from './../../assets/expressjs.png'
import './skills.css'

interface SectionProps { 
  refProp: React.RefObject<HTMLDivElement | null>; 
}

function Skills({ refProp }: SectionProps) {

  const skills = {
    competences: [{
        type: "Front-End",
        skills: [
          { skill: "React", icon: ReactIcon },
          { skill: "TypeScript", icon: TypeScriptIcon },
          { skill: "JavaScript", icon: JavaScriptIcon},
          { skill: "HTML5/CSS3", icon: HTMLIcon }
        ]
      },{
        type: "Additionals",
        skills: [
          { skill: "Git", icon: GitIcon },
          { skill: "Vercel", icon: VercelIcon},
          { skill: "Vite", icon: ViteIcon},
          { skill: "Linux", icon: LinuxIcon}
        ]
      },{
        type: "Languages",
        skills: [
          { skill: "B2-C1 English", icon: EnglishIcon },
          { skill: "Portuguese", icon: PortugueseIcon}
        ]
      },{
        type: 'Back-end',
        skills: [
          { skill: 'Node.js', icon: NodejsIcon },
          { skill: 'Express.js', icon: ExpressJs }
        ]
      }
    ]
  }

  return (
    <div ref={refProp} className="skills">
      <div className="languages">
        <h1>Skills</h1>
          {skills.competences.map((skills) => (
              <div className='languagesType' key={skills.type}>
                <h2>{skills.type}</h2>
                <div className="languagesP">
                  {skills.skills.map((skillSet)=>(
                    <div className='languagesSkills' key={skillSet.skill}>
                      <img src={skillSet.icon} alt={skillSet.icon} />
                      <h4>{skillSet.skill}</h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Skills
