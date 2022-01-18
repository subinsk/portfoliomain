import React from 'react'
import Image from 'next/image'

import Vector from '../../images/icons/vector.svg'

function About() {
    return (
        <div className='bg-cover bg-[#f9fbfc] h-[35rem] w-full flex flex-row justify-center items-center'>
            <div className="flex flex-col">
                <span className='font-semibold text-[#5848a1] text-4xl'>
                    Hey There!
                </span>

                <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-["Open_Sans"] text-[5rem]'>
                    Subin
                    <span className='text-[#5b54bd] text-[1.3rem] font-medium'> , here.</span>
                </span>
                <span className='text-[#5b54bd] underline font-medium'>
                    an idea-driven <span className='text-red-500 text-2xl font-bold'>DEVELOPER</span>, who loves to build cool and innovative things.
                </span>
            </div>
            <Image src={Vector} alt='Vector' />
        </div>
    )
}

export default About
