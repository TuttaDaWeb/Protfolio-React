import NavBar from './pages/navbar/navBar'
import Main from './pages/mainPart/mainPart'
import Skills from './pages/Skills/skills'
import Projects from './pages/projects/projects'
import React, { useRef } from 'react'
import './App.css'

function App() {
  
  const homeRef = useRef<HTMLDivElement>(null); 
  const skillsRef = useRef<HTMLDivElement>(null); 
  const projectsRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => { 
    elementRef.current?.scrollIntoView({ behavior: "smooth" }); 
  };

  return (
    <>
        <NavBar 
          onHomeClick={() => scrollToSection(homeRef)}
          onSkillsClick={() => scrollToSection(skillsRef)}
          onProjectClick={() => scrollToSection(projectsRef)}
        />
        <Main refProp={homeRef}/>
        <Skills refProp={skillsRef}/>
        <Projects refProp={projectsRef}/>
    </>
  )
}

export default App
