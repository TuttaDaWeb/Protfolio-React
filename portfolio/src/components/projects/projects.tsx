import { useState } from 'react';
import Project1 from './../../assets/anime.png'
import './projects.css'

function Projects(){

    const [projects, setProjects] = useState([
        {project: "Anime Login Screen", image: Project1 }
    ])

    return(
        <>
        <div className="projects-container">

        </div>
        </>
    )
}

export default Projects;