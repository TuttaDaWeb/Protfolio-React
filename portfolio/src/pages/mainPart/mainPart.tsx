import Picture from './../../assets/contact-picture.jpeg'
import ResumeArthur from './../../assets/Arthur Vieira - Resume in English.pdf'
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
                <h2>Front-End React Developer/Freelancer</h2>
                <div className="desc">
                    <p>I don’t just build websites; I create digital experiences that turn casual visitors into highly loyal and possible client, increasing the change for the client to buy your product. With Specialization in React and Node.js, I build high-converting portfolios and landing pages designed for speed, reliability, scalability, and strategic engagement. My focus is on blending clean, modern, unorthodox, out-of-the-box lines of code with a user journey that builds immediate trust and loyal fandom and branding</p>
                </div>
                <a href={ResumeArthur} download={ResumeArthur} target="_blank"><button className='resume-download'>Download Résumé</button></a>
            </div>
        </main>
        <div className="grid"></div>
        </>
    )
}

export default Main;