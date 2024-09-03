import React from 'react'
import Header from './component/header/Header'
import Pages from './component/mainpages/Pages'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div>
      <Header/> 
      <Pages/> 
    </div>
    </Router>
  )
}

export default App
