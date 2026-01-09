import EnglishIcon from './../../assets/englishIcon.webp'
import JavaScriptIcon from './../../assets/javascript icon.webp'
import ReactIcon from './../../assets/reactIcon.png'
import TypeScript from './../../assets/typescript.webp'
import PortugueseIcon from './../../assets/portugueseIcon.webp'
import { useState } from "react";
import './skills.css'

interface SectionProps { 
    refProp: React.RefObject<HTMLDivElement | null>; 
}

function Skills({refProp}: SectionProps){
    const [language, setLanguage] = useState([
        {skill: "English", icon: EnglishIcon}, 
        {skill: "Portuguese", icon: PortugueseIcon},
        {skill: "React", icon: ReactIcon},
        {skill: "TypeScript", icon: TypeScript},
        {skill: "JavaScript", icon: JavaScriptIcon},
    ])
    setLanguage
    return(
        <>
        <div ref={refProp} className="skills">
            <div className="languages">
                <h1>Skills</h1>
                <div className="languagesP">
                    {language.map((language) => (<div className={'languageSS'} key={language.skill}>
                        <img src={language.icon} alt={language.icon} />
                        <h2>{language.skill}</h2>
                    </div>))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills;