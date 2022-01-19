import React from 'react'
import Image from 'next/image'

import Vector from '../../images/icons/vector.svg'

function About() {
    return (
        <div className='bg-cover bg-[#f9fbfc] h-[35rem] w-full flex flex-row justify-center items-center'>
            <div className="flex flex-col">
                <span className='font-light text-purple-500 text-xl'>
                    Hey There!
                </span>
                <span className='bg-gradient-to-r from-custom-purple-600 to-custom-cyan bg-clip-text text-transparent font-["Open_Sans"] text-[8rem]'>
                    Subin
                </span>
                <span className='text-purple-500 text-base font-base'>here.</span>
                <span className='text-purple-500 font-base'>
                    an idea-driven <span className='text-custom-purple-600 text-2xl font-semibold'>DEVELOPER</span>, who loves to build cool and <span className='text-custom-purple-600 text-2xl font-semibold'>INNOVATIVE</span> things.
                </span>
            </div>
            <Image src={Vector} alt='Vector' />
        </div>
    )
}

export default About
