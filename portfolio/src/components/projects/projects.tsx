import { useState } from 'react';
import Project1 from './../../assets/anime.png'
import Project2 from './../../assets/login screen.png'
import './projects.css'

function Projects(){

    const [projects, setProjects] = useState([
        {project: "Anime Login Screen", image: Project1},
        {project: "Milimalistic Login Screen", image: Project2}
    ])

    return(
        <>
        <div className="projects-container">
            {projects.map((project) => (<div className='project-portfolio' key={project.project}>
                <img src={project.image} alt={project.image} />
                <h2>{project.project}</h2>
            </div>))}
        </div>
        </>
    )
}

export default Projects;