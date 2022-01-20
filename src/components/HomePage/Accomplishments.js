import React from 'react';
import Image from 'next/image'

import HackJNU from '../../images/certificates/hackjnu.jpg'

function Accomplishments() {
    return <div className='flex flex-col w-full'>
        <p className='flex bg-gradient-to-r from-custom-purple-300 to-custom-cyan bg-clip-text text-transparent text-5xl p-12 font-medium after:content-[""] after:relative after:inline-block after:w-2/5 after:h-[1px] after:bg-custom-purple-50 after:mt-7 after:ml-4'>My Accomplishments till now</p>
        <div className='flex flex-col'>
            <div className='flex justify-evenly'>
                <a href="https://www.dropbox.com/s/by789h6jrejo3is/HackJNU%202.0%20%3A%20Subin%20S%20K%20Cerificate.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                    <div className="flex w-[22rem] h-[17rem] overflow-hidden duration-700 rounded-lg shadow-xl hover:shadow-2xl">
                        <Image src={HackJNU} alt='HackJNU' objectFit='cover' />
                    </div>
                </a>
                <div className='flex flex-col items-end my-2'>
                    <p className='text-base text-purple-700'>WINNER</p>
                    <p className='text-4xl font-medium bg-gradient-to-r from-blue-800 to-custom-cyan bg-clip-text text-transparent'>HackJNU 2.0</p>
                </div>
            </div>
        </div>
    </div>;
}

export default Accomplishments;
