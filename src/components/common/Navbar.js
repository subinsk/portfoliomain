import React from 'react'

function Navbar() {
    return (
        <div className='sticky z-50 bg-white top-0 flex justify-between items-center h-16 p-2 px-7 w-full shadow-md border-0'>
            <div id="logo" className="text-custom-navy font-bold text-2xl">Subin S K</div>
            <div className='flex justify-between items-center'>
                <button className='text-custom-pink mx-2' id="home">Home</button>
                <button className='text-custom-pink mx-2' id="about">About</button>
                <button className='text-custom-pink mx-2' id="projects">Projects</button>
                <button className='text-custom-pink mx-2' id="certifications">Certifications</button>
            </div>
        </div>
    )
}

export default Navbar
