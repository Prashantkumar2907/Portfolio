import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './about/About'
import Contact from './contact/Contact'
import Projects from './project/Projects'
import Skills from './skill/Skills'
import Introduction from './introduction/Introduction'


const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Introduction/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default Pages
