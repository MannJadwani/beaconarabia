import React, { useState } from 'react'
import Link from "next/link";
import Logo from '/public/images/logo.png'
import Image from 'next/image';

const Header = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header className="absolute w-full z-[111]">
            <div className="bg-gradient-to-b from-[#272c3f]/90 to-transparent">
                <div className="wraper">
                    <div className="flex items-center justify-between py-4">
                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="hidden lg:flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>

                        {/* Logo - Left on PC, Center on Mobile */}
                        <div className="w-[120px] lg:w-[80px] lg:mx-auto">
                            <Link onClick={ClickHandler} href="/" className="block">
                                <Image 
                                    className="w-full h-auto rounded-full p-0.5 bg-white/10" 
                                    src={Logo} 
                                    alt="Logo"
                                    width={120}
                                    height={120}
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className={`lg:fixed lg:inset-0 lg:bg-[#272c3f]/95 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'lg:visible lg:opacity-100' : 'lg:invisible lg:opacity-0'}`}>
                            <ul className="flex items-center space-x-8 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-4 lg:p-6 lg:pt-20">
                                <li>
                                    <Link onClick={() => {
                                        ClickHandler();
                                        setMobileMenuOpen(false);
                                    }} href="/" 
                                        className="text-white hover:text-[#c0b596] transition-all text-sm uppercase lg:text-base lg:block lg:py-2">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => {
                                        ClickHandler();
                                        setMobileMenuOpen(false);
                                    }} href="/about" 
                                        className="text-white hover:text-[#c0b596] transition-all text-sm uppercase lg:text-base lg:block lg:py-2">
                                        Who We Are
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => {
                                        ClickHandler();
                                        setMobileMenuOpen(false);
                                    }} href="/practice" 
                                        className="text-white hover:text-[#c0b596] transition-all text-sm uppercase lg:text-base lg:block lg:py-2">
                                        Company Formation
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => {
                                        ClickHandler();
                                        setMobileMenuOpen(false);
                                    }} href="/solutions" 
                                        className="text-white hover:text-[#c0b596] transition-all text-sm uppercase lg:text-base lg:block lg:py-2">
                                        Our Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={() => {
                                        ClickHandler();
                                        setMobileMenuOpen(false);
                                    }} href="/contact" 
                                        className="text-white hover:text-[#c0b596] transition-all text-sm uppercase lg:text-base lg:block lg:py-2">
                                        Reach Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Empty div for layout balance on mobile */}
                        <div className="w-8 lg:hidden"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;