import './contact.css'

interface SectionProps { 
    refProp: React.RefObject<HTMLDivElement | null>; 
}

function Contact({refProp}: SectionProps){
    return(
        <>
        <div ref={refProp} className="contact">
            <h1>Contact</h1>
            <div className="card">
                <div className="card-content">
                    <div className="card-title">Contact</div>
                    <div className="card-informations">
                        <div className="phone">Whatsapp: <span>+55 11 99173-8249</span></div>
                        <div className="e-mail">E-mail: arthur.vieira2007@hotmail.com</div>
                        <div className="federal-unit">State: Sao Paulo</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;