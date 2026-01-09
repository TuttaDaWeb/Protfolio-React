import EnglishIcon from './../../assets/englishIcon.webp'
import JavaScriptIcon from './../../assets/javascript icon.webp'
import ReactIcon from './../../assets/reactIcon.png'
import TypeScriptIcon from './../../assets/typescript.webp'
import PortugueseIcon from './../../assets/portugueseIcon.webp'
import './skills.css'

interface SectionProps { 
  refProp: React.RefObject<HTMLDivElement | null>; 
}

function Skills({ refProp }: SectionProps) {

  const language = [
    { skill: "English", icon: EnglishIcon }, 
    { skill: "Portuguese", icon: PortugueseIcon },
    { skill: "React", icon: ReactIcon },
    { skill: "TypeScript", icon: TypeScriptIcon },
    { skill: "JavaScript", icon: JavaScriptIcon },
  ]

  return (
    <div ref={refProp} className="skills">
      <div className="languages">
        <h1>Skills</h1>
        <div className="languagesP">
          {language.map((lang) => (
            <div className="languageSS" key={lang.skill}>
              <img src={lang.icon} alt={lang.skill} />
              <h2>{lang.skill}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
