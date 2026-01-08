import EnglishIcon from './../../assets/englishIcon.webp'
import JavaScriptIcon from './../../assets/javascript icon.webp'
import ReactIcon from './../../assets/reactIcon.png'
import TypeScript from './../../assets/typescript.webp'
import PortugueseIcon from './../../assets/portugueseIcon.webp'
import { useState } from "react";
import './skills.css'

function Skills(){
    const [language, setLanguage] = useState([
        {skill: "English", icon: EnglishIcon}, 
        {skill: "Portuguese", icon: PortugueseIcon},
        {skill: "React", icon: ReactIcon},
        {skill: "TypeScript", icon: TypeScript},
        {skill: "JavaScript", icon: JavaScriptIcon},
    ])

    return(
        <>
        <div className="skills">
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
        <div className="stain_2"></div>
        </>
    )
}

export default Skills;