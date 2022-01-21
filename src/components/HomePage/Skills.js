import React from 'react'
import Image from 'next/image';


function Skills() {
    const images = importAll(require.context('../../images/skills/', false, /\.(png|jpe?g|svg)$/));
    return (
        <div id="skills" className='w-full flex flex-col'>
            <p className='bg-gradient-to-r from-custom-purple-300 to-custom-cyan bg-clip-text text-transparent flex text-4xl md:text-5xl pt-20 px-6 md:p-12 font-medium after:content-[""] after:relative after:inline-block after:w-2/5 after:h-[1px] after:bg-custom-purple-50 after:mt-5 md:after:mt-7 after:ml-4'> I&apos;m good at</p>
            <div className='flex justify-center flex-wrap md:flex-row md:py-12'>
                {
                    Object.keys(images).map((key, index) => {
                        return (<div className='p-8' key={key}><Image key={index} src={images[key].default.src} width={100} height={100} alt="Skill" /></div>)
                    })
                }
            </div>
        </div>
    )
}

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}


export default Skills
