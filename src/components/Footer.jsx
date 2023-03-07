import React from 'react'

const Footer = () => {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300
    rounded-t-lg'>
        <a href="#hero" className='block text-xl md:text-2xl font-semibold'>Daniel Jimenez</a>
        <a href="mailto:jimenezaliadaniel@gmail.com"
        className=' text-sm md:text-md hover:text-indigo-500'>
            jimenezaliagadaniel@gmail.com
        </a>
        <p className='text-xs  mt-2 text-gray-500'>
            © Portafolio hecho con Vite y Tailwind {new Date().getFullYear}. Todos los derechos reservados
        </p>
    </div>
  )
}

export default Footer