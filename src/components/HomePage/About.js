import React, { useEffect } from 'react'
import Image from 'next/image'

import Vector from '../../images/icons/vector.svg'

function About() {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [])

    return (
        <div id="about" className='bg-cover bg-[#f9fbfc] h-[35rem] w-full flex flex-col p-9 pt-28 md:flex-row justify-center items-center'>
            <div className="flex flex-col">
                <span className='font-light text-purple-500 text-xl'>
                    Hey There!
                </span>
                <span className='bg-gradient-to-r from-custom-purple-600 to-custom-cyan bg-clip-text text-transparent font-["Open_Sans"] text-[4rem] md:text-[8rem]'>
                    Subin
                </span>
                <span className='text-purple-500 text-base font-base'>here.</span>
                <span className='text-purple-500 font-base'>
                    an idea-driven <span className='text-custom-purple-600 text-medium md:text-2xl font-semibold'>DEVELOPER</span>, who loves to build cool and <span className='text-custom-purple-600 text-medium md:text-2xl font-semibold'>INNOVATIVE</span> things.
                </span>
            </div>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_bp5lntrf.json" background="transparent" speed="1" style={{ padding: "0.5rem" }} loop autoplay></lottie-player>
        </div>
    )
}

export default About
