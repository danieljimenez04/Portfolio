import React from 'react'
import HeroSection from './components/HeroSection'
import { useState } from 'react'
import { useEffect } from 'react'
import Services from './components/Services'
import Works from './components/Works'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  const [theme, settheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches){
        settheme('dark')
    }else{
        settheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme==='dark'){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
  
  }, [theme])
  
  const handleThemeSwitch=()=>{
    settheme(theme==='dark'? 'light':'dark') 
  }
  return (
    <>
    <button
    type='button'
    onClick={handleThemeSwitch}
    className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
    >
        {theme==='dark'? '🌛':'🌞'}
    </button>
    <div className='font-inter bg:white dark:bg-slate-900'>
      <div className='max-w-5xl mx-auto w-11/12'>
        <HeroSection></HeroSection>
        <Services></Services>
        <Works></Works>
        <About></About>
        <Footer></Footer>
      </div>

    </div>
    
    </>
    
  )
}

export default App