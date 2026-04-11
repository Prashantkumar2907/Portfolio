import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './component/header/Header'
import Pages from './component/mainpages/Pages'
import Footer from './component/footer/Footer'
import './index.css'

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Pages />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
