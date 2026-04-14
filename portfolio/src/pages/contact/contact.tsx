import FiverrLogo from './../../assets/fiverrlogo-removebg-preview.png'
import './contact.css'

function CTA(){
    return(
        <div className="cta">
            <div className="cta-normal">
                <h1>Hire me on Fiverr</h1>
                <img src={FiverrLogo} alt="" />
            </div>
            <div className="cta-social-links">

            </div>
        </div>
    )
}

export default CTA;