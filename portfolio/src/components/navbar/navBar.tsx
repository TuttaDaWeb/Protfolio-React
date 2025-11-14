import { useState } from 'react';
import  './navBar.css'

function NavBar(){

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
                        <a href="#">Home</a>
                        <a href="#">Skills</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="social-networks">
                        <div className="linkedin"><i className="ri-linkedin-box-fill"></i></div>
                        <div className="github"><i className="ri-github-fill"></i></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;