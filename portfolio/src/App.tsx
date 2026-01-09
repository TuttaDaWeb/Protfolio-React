import NavBar from './components/navbar/navBar'
import Main from './components/mainPart/mainPart'
import Skills from './components/Skills/skills'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import React, { useRef } from 'react'
import './App.css'

function App() {
  
  const homeRef = useRef<HTMLDivElement>(null); 
  const skillsRef = useRef<HTMLDivElement>(null); 
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => { 
    elementRef.current?.scrollIntoView({ behavior: "smooth" }); 
  };

  return (
    <>
      <NavBar 
        onHomeClick={() => scrollToSection(homeRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <Main refProp={homeRef}/>
      <Skills refProp={skillsRef}/>
      <Projects refProp={projectsRef}/>
      <Contact refProp={contactRef} />
    </>
  )
}

export default App
