import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
        <div className='w-full md:w-6/12'>
            <SectionTitle>Acerca de mí</SectionTitle>
            <p className='text-md text-gray-600 dark:text-gray-300'>
                Egresado de Academlo en el año 2022 y trabajando durante 1 año en proyectos de desarrollo fronted con ReactJS y NodeJS con Rest APIs. Me gusta la lógica de programación y aprender nuevas cosas en mi día a día.
            </p>
            <a href="mailto:jimenezaliagadaniel@gmail.com"
            className='block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'
            >jimenezaliagadaniel@gmail.com</a>
        </div>
        <img src={`https://avatars.githubusercontent.com/u/68394823?s=96&v=4`} alt="Daniel Jimenez" className='w-full md:w-6/12 rounded-lg object-cover' />
    </div>
  )
}

export default About