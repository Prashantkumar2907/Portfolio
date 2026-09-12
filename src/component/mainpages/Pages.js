import React from 'react'
import Introduction from './introduction/Introduction'
import Skills from './skill/Skills'
import Experience from './experience/Experience'
import Projects from './project/Projects'
import Resume from './resume/Resume'
import Contact from './contact/Contact'

const Pages = () => {
  return (
    <main id="content" tabIndex={-1}>
      <Introduction />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </main>
  )
}

export default Pages
