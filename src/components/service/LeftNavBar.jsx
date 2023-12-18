import React from 'react'
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const LeftNavBar = ({navItems}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    let navigate = useNavigate(); 

    return (
        <>
            {/* Only display in web */}
            <nav className={`hidden md:block bg-white shadow-md md:w-[250px] pt-[125px] h-full border-b text-primary fixed top-0 left-0`}>
                <div className="text-lg container my-auto flex justify-between items-center font-[500]">
                    <div className="flex items-center">
                        {/* showing nav items using map*/}
                        <ul className={`md:flex-col space-y-2`}>
                            {navItems.map(({ link, path }) => (
                                <a key={link} href={path} className={`px-8 py-3 block transition-all duration-300 hover:text-white hover:bg-indigo-600 rounded-xl`}>
                                    {link}
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            
            {/* Only display in mobile */}
            <nav className={`${isMenuOpen ? "" : "-translate-x-[100%]"} bg-white shadow-md md:w-[250px] pt-[125px] h-full border-b text-primary fixed top-0 left-0`}>
                <div className="text-lg container my-auto flex justify-between items-center font-[500]">
                    <div className="flex items-center">
                        {/* showing nav items using map*/}
                        <ul className={`md:flex-col space-y-2`}>
                            {navItems.map(({ link, path }) => (
                                <a key={link} href={path} className={`px-8 py-3 block transition-all duration-300 hover:text-white hover:bg-indigo-600 rounded-xl`}>
                                    {link}
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`${isMenuOpen ? "" : "translate-x-[100%]"} absolute top-[30%] right-0 md:hidden`}>
                    <button
                        onClick={toggleMenu}
                        className="text-white text-lg focus:outline-none focus:text-gray-300"
                    >
                        {isMenuOpen ? (
                            <FaChevronLeft className="w-6 h-6 text-primary" />
                        ) : (
                            <FaChevronRight className="w-6 h-6 text-primary" />
                        )}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default LeftNavBar