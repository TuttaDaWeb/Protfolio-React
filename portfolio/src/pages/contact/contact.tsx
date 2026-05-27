import { useState } from 'react';
import FiverrLogo from './../../assets/fiverrlogo-removebg-preview.png'
import './contact.css'

interface SectionProps {  
    refProp: React.RefObject<HTMLDivElement | null>; 
}


function CTA({refProp}: SectionProps){

    const [isUsing, setIsUsing] = useState(false)
    const [isTransiotioning, setIsTransitioning] = useState(false)

    const animationHandler = () => {
        if(isUsing){
            setIsTransitioning(true)
            setTimeout(()=>{
                setIsUsing(false)
                setIsTransitioning(false)
            }, 250)
        } else {
            setIsTransitioning(true)
            setTimeout(()=>{
                setIsTransitioning(false)
                setIsUsing(true)
            }, 100)
        }
    }

    return(
        <div ref={refProp} className="cta">
            <div className={`cta-normal ${isUsing ? 'hide' : 'show'} ${isTransiotioning ? 'transition' : ''}`}>
                <div className="fiverr-desc">
                    <h1>Want a Portfolio or Landing Page? Hire me on Fiverr</h1>
                    <img src={FiverrLogo} alt="" />
                </div>
                <button className="next-fi" onClick={animationHandler}><i className="ri-arrow-right-line"></i></button>
            </div>
            <div className={`cta-social-links ${isUsing ? 'show' : 'hide'} ${isTransiotioning ? 'transition' : ''}`}>
                <div className="button-back" onClick={animationHandler}><i className="ri-arrow-left-line"></i></div>
                <div className="all-soical-links">
                    <div id="linkedin-account" onClick={() => window.open('https://www.linkedin.com/in/arthur-vieira-coder/')}>
                        <i className="ri-linkedin-box-line"></i>
                    </div>
                    <div id="fi-account" onClick={() => window.open('https://www.fiverr.com/arthur_tutta/')}>
                        <i className="ri-fiverr-line"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA;