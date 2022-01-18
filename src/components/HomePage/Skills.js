import React from 'react'
import Image from 'next/image';


function Skills() {
    const images = importAll(require.context('../../images/skills/', false, /\.(png|jpe?g|svg)$/));
    return (
        <div className='w-full flex flex-col items-center'>
            <p className='text-[4rem] text-[#5864f6] font-medium'> Im good at</p>
            <div className='flex px-12'>
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
