import React from 'react'
import About from './about/About'
import Contact from './contact/Contact'
import Projects from './project/Projects'
import Skills from './skill/Skills'
import Introduction from './introduction/Introduction'
import Experience from './experience/Experience'

const Pages = () => {
  return (
    <main>
        <Introduction/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
    </main>
  )
}

export default Pages
