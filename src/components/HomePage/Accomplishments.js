import React from 'react';
import Image from 'next/image'

import Tooltip from '../../hooks/Tooltip';

import HackJNU from '../../images/certificates/hackjnu.JPG'
import Cicada from '../../images/certificates/cicada_certificate.jpg'
import Octahacks from '../../images/certificates/octahacks.png'

function Accomplishments() {
    return <div id="accomplishments" className='flex flex-col w-full px-12 mb-24'>
        <p className='flex bg-gradient-to-r from-custom-purple-300 to-custom-cyan bg-clip-text text-transparent text-2xl md:text-5xl py-10 md:p-12 font-medium after:content-[""] after:relative after:inline-block after:w-2/5 after:h-[1px] after:bg-custom-purple-50 after:mt-12 md:after:mt-7 after:ml-4'>My Accomplishments till now</p>
        <div className='flex flex-col items-center space-y-24'>
            <div className='flex flex-col border-0 rounded-md shadow-lg bg-blue-100/30 md:flex-row md:justify-evenly md:max-w-[48.2rem]'>
                <Tooltip tooltipText="Click to view Certificate">
                    <a href="https://www.dropbox.com/s/by789h6jrejo3is/HackJNU%202.0%20%3A%20Subin%20S%20K%20Cerificate.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                        <div className="flex basis-1/5 overflow-hidden duration-700 rounded-lg shadow-xl md:hover:shadow-2xl md:saturate-0 md:hover:saturate-150">
                            <Image src={HackJNU} alt='HackJNU' objectFit='cover' />
                        </div>
                    </a>
                </Tooltip>
                <div className='flex flex-col basis-4/5 items-start p-3 md:items-end my-2 md:p-6'>
                    <p className='text-xl font-medium bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent'>WINNER</p>
                    <p className='text-[2rem] md:text-[3rem] font-medium bg-gradient-to-r from-blue-800 to-custom-cyan bg-clip-text text-transparent'>HackJNU 2.0</p>
                </div>
            </div>

            <div className='flex flex-col-reverse border-0 rounded-md shadow-lg bg-blue-100/30 md:flex-row md:justify-evenly md:space-x-15 md:max-w-[48.2rem]'>
                <div className='flex flex-col items-start my-2 p-2 md:p-6'>
                    <p className='text-xl font-medium bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent'>RUNNER-UP</p>
                    <p className='text-[2rem] md:text-[3rem] font-medium bg-gradient-to-r from-blue-800 to-custom-cyan bg-clip-text text-transparent'>Cicada 3301:Reinvented</p>
                </div>
                <Tooltip tooltipText="Click to view Certificate">
                    <a href="https://www.dropbox.com/s/fwtr00ash2wugw5/Subin%20SK%20Certificate%20-%20Cicada%203301.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                        <div className="flex basis-1/5 overflow-hidden duration-700 rounded-lg shadow-xl md:hover:shadow-2xl md:saturate-0 md:hover:saturate-150">
                            <Image src={Cicada} alt='Cicada' objectFit='cover' />
                        </div>
                    </a>
                </Tooltip>
            </div>

            <div className='flex flex-col border-0 rounded-md shadow-lg bg-blue-100/30 md:flex-row md:justify-evenly md:space-x-20 md:max-w-[48.2rem]'>
                <Tooltip tooltipText="Click to view Certificate">
                    <a href="https://www.dropbox.com/s/d1xlgzeqzurx91j/Octahacks2.0.pdf?dl=0" target="_blank" rel="noopener noreferrer">
                        <div className="flex basis-1/5 overflow-hidden duration-700 rounded-lg shadow-xl hover:shadow-2xl md:saturate-0 hover:saturate-150">
                            <Image src={Octahacks} alt='Octahacks' objectFit='cover' />
                        </div>
                    </a>
                </Tooltip>
                <div className='flex flex-col items-start md:items-end my-2 p-6'>
                    <p className='text-xl font-medium bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent'>RUNNER UP</p>
                    <p className='text-[2rem] md:text-[3rem] font-medium bg-gradient-to-r from-blue-800 to-custom-cyan bg-clip-text text-transparent'>Octahacks 2.0</p>
                </div>
            </div>
        </div>
    </div>
}

export default Accomplishments;
