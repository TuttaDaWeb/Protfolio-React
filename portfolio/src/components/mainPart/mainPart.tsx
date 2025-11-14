import Picture from './../../assets/Profile Picture.jpg'
import './mainPart.css'

function Main(){

    const name = 'Arthur V.'

    return(
        <>
        <main className='main'>
            <div className="img">
                <img src={Picture} alt=""/>
            </div>
            <div className="name">
                <h2>Hi, My name's {name}</h2>
                <div className="desc">
                    <p>I’m a front-end developer specializing in React and TypeScript, with strong skills in JavaScript, HTML, CSS, and Git. I’m passionate about building fast, modern, and responsive websites, always driven by a spirit of leadership and continuous improvement.</p>
                </div>
            </div>
            <div className="grid"></div>
            <div className="stain"></div>
        </main>
        </>
    )
}

export default Main;