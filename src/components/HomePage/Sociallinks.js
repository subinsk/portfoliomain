import React from 'react';

function Sociallinks({ sticky }) {
    return (
        <ul className={`flex flex-col ${sticky ? 'fixed top-32' : 'absolute'}  right-3 space-y-8 after:content-[''] after:relative after:inline-block after:w-[1px] after:h-[15rem] after:bg-custom-purple-50 after:mt-6 md:after:mt-7 after:ml-2`}>
            <li>
                <a href="https://github.com/subinsk" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#480098" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 hover:stroke-purple-700/60">
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
            </li>

            <li>
                <a href="https://twitter.com/SubinSK6" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#480098" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 hover:stroke-purple-700/60">
                        <title>Twitter</title>
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                </a>
            </li>

            <li>
                <a href="https://www.linkedin.com/in/subin-s-k-9b767219a/" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#480098" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 hover:stroke-purple-700/60">
                        <title>LinkedIn</title>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
            </li>
        </ul>
    )
}

export default Sociallinks;
