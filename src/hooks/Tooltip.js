import React, { createRef } from 'react';

function Tooltip({ children, tooltipText }) {
    const tipRef = createRef(null);
    function handleMouseEnter() {
        tipRef.current.style.opacity = 1;
        tipRef.current.style.marginLeft = "20px";
    }
    function handleMouseLeave() {
        tipRef.current.style.opacity = 0;
        tipRef.current.style.marginLeft = "10px";
    }
    return (
        <div
            className="relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="absolute whitespace-no-wrap bg-gradient-to-r from-purple-700 to-blue-700/80 text-white px-4 py-2 m-5 rounded flex items-center transition-all duration-150"
                style={{ left: "100%", opacity: 0 }}
                ref={tipRef}
            >
                <div
                    className="bg-purple-700 h-3 w-3 absolute"
                    style={{ left: "-6px", transform: "rotate(45deg)" }}
                />
                {tooltipText}
            </div>
            {children}
        </div>
    );
}

export default Tooltip;
