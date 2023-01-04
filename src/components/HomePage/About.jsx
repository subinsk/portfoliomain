import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
        <div id="about" className='bg-cover font-libre bg-[#f9fbfc] h-[35rem] w-full flex flex-col px-20 md:pt-16 pt-28 md:flex-row'>
            <div className="flex flex-col">
                <span className='font-medium text-purple-700 text-lg md:pt-20'>
                    Hey There! I am
                </span>
                <span className='bg-gradient-to-r from-purple-600 to-custom-cyan font-extrabold bg-clip-text text-transparent text-[4rem] md:text-[8rem]'>
                    Subin
                </span>
                <span className='bg-gradient-to-r from-purple-900 to-custom-cyan bg-clip-text text-transparent font-semibold text-medium md:text-medium'>DEVELOPER &middot; COMMUNITY CONTRIBUTOR</span>
            </div>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_bp5lntrf.json" background="transparent" speed="1" style={{ padding: "0.5rem" }} loop autoplay></lottie-player>
        </div>
    )
}

export default About
