import React from 'react'
import Image from 'next/image'

import Logo from '../../images/logo/logo.svg'

function Navbar() {
    return (
        <div className='sticky z-50 bg-white top-0 flex justify-between items-center h-16 p-2 px-7 w-full shadow-md border-0'>
            <div id="logo" className='pt-4'>
                <Image height={120} width={300} src={Logo} alt='logo' />
            </div>
            <div className='flex justify-between items-center'>
                <button className='text-custom-purple-300 text-[16px] mx-2 hover:text-custom-purple-600' id="home">Home</button>
                <button className='text-custom-purple-300 text-[16px] mx-2 hover:text-custom-purple-600' id="about">About</button>
                <button className='text-custom-purple-300 text-[16px] mx-2 hover:text-custom-purple-600' id="projects">Projects</button>
                <button className='text-custom-purple-300 text-[16px] mx-2 hover:text-custom-purple-600' id="certifications">Certifications</button>
            </div>
        </div>
    )
}

export default Navbar
