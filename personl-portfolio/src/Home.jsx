import React from 'react'
import Header from './Pages/Header'
import Banner from './Pages/Banner'
import Bio from './Pages/Bio'
import Skills from './Pages/Skills'
import Project from './Pages/Project'

import Contact from './Pages/Contact'
import './global.css'

const Home = () => {
  return (
    <div>
        
        <Header/>
        <Banner/>
        <Bio/>
        <Skills/>
        <Project/>
        <Contact/>

    </div>
  )
}

export default Home