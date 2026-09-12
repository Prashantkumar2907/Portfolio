import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './component/header/Header'
import Pages from './component/mainpages/Pages'
import Footer from './component/footer/Footer'
import ScrollProgress from './component/ScrollProgress'
import BackToTop from './component/BackToTop'
import './index.css'

const App = () => {
  return (
    <ThemeProvider>
      <a className="skip-link" href="#content">Skip to content</a>
      <ScrollProgress />
      <div className="app">
        <Header />
        <Pages />
        <Footer />
      </div>
      <BackToTop />
    </ThemeProvider>
  )
}

export default App
