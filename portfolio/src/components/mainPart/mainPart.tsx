import Picture from './../../assets/profile-picture-2.jpeg'
import './mainPart.css'

interface SectionProps {  
    refProp: React.RefObject<HTMLDivElement | null>; 
}

function Main({refProp}: SectionProps){
    
    return(
        <>
        <main ref={refProp} id='main' className='main'>
            <div className="img">
                <img src={Picture} alt=""/>
            </div>
            <div className="name">
                <h2>Front-End React Developer</h2>
                <div className="desc">
                    <p>I’m a front-end developer specializing in React and TypeScript, with strong skills in JavaScript, HTML, CSS, and Git. I’m passionate about building fast, modern, and responsive websites, always driven by a spirit of leadership and continuous improvement.</p>
                </div>
            </div>
        </main>
        <div className="grid"></div>
        </>
    )
}

export default Main;