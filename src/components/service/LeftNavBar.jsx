import React from 'react'
import { useState } from "react";
import { FaChevronRight, FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const LeftNavBar = ({navItems}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    let navigate = useNavigate(); 

    return (
        <>
            <nav className="bg-white md:w-[250px] pt-[125px] h-full border-b text-primary fixed top-0 left-0 shadow-md">
                <div className="text-lg container my-auto flex justify-between items-center font-[500]">
                    <div className="flex items-center">
                        {/* showing nav items using map*/}
                        <ul className="flex-col space-y-2">
                            {navItems.map(({ link, path }) => (
                                <a key={link} href={path} className="px-8 py-3 block transition-all duration-300 hover:text-white hover:bg-indigo-600 rounded-xl">
                                {link}
                                </a>
                            ))}
                        </ul>
                    </div>

                    {/* Only display in mobile */}
                    <div className="md:hidden">
                        <button
                        onClick={toggleMenu}
                        className="text-white text-lg focus:outline-none focus:text-gray-300"
                        >
                        {isMenuOpen ? (
                            <FaXmark className="w-6 h-6 text-primary" />
                        ) : (
                            <FaChevronRight className="w-6 h-6 text-primary" />
                        )}
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`space-y-4 px-4 pt-24 pb-5 bg-secondary  ${
                isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
                }`}
            >
                {navItems.map(({ link, path }) => (
                <a key={link} href={path} className="block hover:text-gray-300">
                    {link}
                </a>
                ))}
            </div>
        </>
    )
}

export default LeftNavBar