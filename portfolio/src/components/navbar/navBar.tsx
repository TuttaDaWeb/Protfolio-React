import { useState } from 'react';
import  './navBar.css'

interface NavbarProps { 
    onHomeClick: () => void;
    onSkillsClick: () => void;
    onProjectClick: () => void;
    onContactClick: () => void;
}

function NavBar({onHomeClick, onSkillsClick, onProjectClick, onContactClick}: NavbarProps){

    const [toggle, useToggle] = useState<boolean>(false)
    const [isClosing, setClosing] = useState(false)

    const handletoggle = () => {
        if(toggle){
            setClosing(true)
            setTimeout(()=>{
                setClosing(false)
                useToggle(false)
            }, 200)
        }else{
            useToggle(true)
        }
    }

    const redirrectLinkedInandGitHub = (e: String) => {
        if(e === "linkedin"){
            window.location.href = 'https://www.linkedin.com/in/arthur-vieira-coder/';
        }
        if(e === "github"){
            window.location.href = 'https://github.com/TuttaDaWeb';
        }
    }

    return(
        <>
        <div className="nav">
            <div className="logo">
                <h1>Arthur V.</h1>
            </div>
            <div className="close" onClick={handletoggle}><i className="ri-menu-line"></i></div>
            <div className={`menu ${toggle ? 'active' : ''} ${isClosing ? 'closing' : ''}`}>
                <div className="menu_space">
                    <div className="close-part2" onClick={handletoggle}><i className="ri-close-line"></i></div>
                    <div className="buttons-space">
                        <a onClick={onHomeClick}>Home</a>
                        <a onClick={onSkillsClick}>Skills</a>
                        <a onClick={onProjectClick}>Projects</a>
                        <a onClick={onContactClick}>Contact</a>
                    </div>
                    <div className="social-networks">
                        <div className="linkedin" onClick={() => redirrectLinkedInandGitHub('linkedin')}><i className="ri-linkedin-box-fill"></i></div>
                        <div className="github" onClick={() => redirrectLinkedInandGitHub('github')}><i className="ri-github-fill"></i></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;