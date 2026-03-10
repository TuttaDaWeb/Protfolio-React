import './contact.css'

interface SectionProps { 
    refProp: React.RefObject<HTMLDivElement | null>; 
}

function Contact({refProp}: SectionProps){
    return(
        <>
        <div ref={refProp} className="contact">
            <h1>Contacts</h1>
            <div className="contact-items">
                <div className="whatsapp" onClick={() => window.open('https://wa.me/11991738249')}>
                    <div className="whatsapp-icon">
                        <i className="ri-whatsapp-line"></i>
                    </div>
                    <b>+55 11 99173-8249</b>
                </div>
                <div className="e-mail">
                    <div className="e-mail-icon">
                        <i className="ri-at-line"></i>
                    </div>
                    <b>arthur.vieira2007@hotmail.com</b>
                </div>
                <div className="linkedin-2" onClick={()=>window.open('https://www.linkedin.com/in/arthur-vieira-coder/')}>
                    <div className="linkedin-icon">
                        <i className="ri-linkedin-line"></i>
                    </div>
                    <b>@arthur-vieira-coder</b>
                </div>
                <div className="github-2" onClick={()=>window.open('https://github.com/TuttaDaWeb')}>
                    <div className="github-icon">
                        <i className="ri-github-fill"></i>
                    </div>
                    <b>@TuttaDaWeb</b>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;