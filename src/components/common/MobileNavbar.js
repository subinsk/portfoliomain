import React from 'react';

function MobileNavbar() {
    const [showMobNavbar, setMobNavbarHandler] = useState(false)

    const mobNavbarHandler = () => {
        setMobNavbarHandler(true)
    }
    return <div className={`${showMobNavbar ? 'translate-y-full' : 'translate-y-0'} transition-all  ease-in-out absolute top-0 w-full h-screen flex flex-col`}>
        <svg onClick={() => mobNavbarHandler()} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-4 right-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>;
}

export default MobileNavbar;
