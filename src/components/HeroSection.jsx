import React from 'react'

const HeroSection = () => {
  return (
    <div id='hero' className='flex items-center justify-center flex-col py-20'>
        
        <div className='text-center'>
            <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>Hola, Mi nombre es Daniel Jimenez</h1>
            <p className='text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>Soy desarrollador full stack con conocimientos en HTML, CSS ,JS , ReactJS, NodeJS. Te invito a revisar los proyectos que he realizado</p>
            <a href="#works" className='inline-block px-8 py-3 border-tr
             text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md'>Mis proyectos</a>
        </div>
    </div>
  )
}

export default HeroSection