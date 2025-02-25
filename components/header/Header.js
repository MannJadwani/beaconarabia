import React, { useState } from 'react'
import Link from "next/link";
import Logo from '/public/images/logo.png'
import Image from 'next/image';

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [searchActive, setSearchActive] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header className="relative z-[111]">
            <div className="bg-[#272c3f]">
                <div className="wraper">
                    {/* Main Navigation */}
                    <div className="flex items-center justify-between py-4">
                        {/* Mobile Menu Button */}
                        <button 
                            onClick={() => setMenuState(true)}
                            className="hidden lg:flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                            aria-label="Open Menu"
                        >
                            <span className="block w-6 h-0.5 bg-white transform transition-all duration-300"></span>
                            <span className="block w-6 h-0.5 bg-white transform transition-all duration-300"></span>
                            <span className="block w-6 h-0.5 bg-white transform transition-all duration-300"></span>
                        </button>

                        {/* Desktop Navigation with Logo */}
                        <div className="flex items-center space-x-8 lg:hidden">
                            {/* Logo - Only visible on desktop */}
                            <div className="w-[50px]">
                                <Link onClick={ClickHandler} href="/" className="block">
                                    <Image 
                                        className="w-full h-auto rounded-full p-0.5 bg-white/10" 
                                        src={Logo} 
                                        alt="Logo"
                                        width={50}
                                        height={50}
                                    />
                                </Link>
                            </div>

                            {/* Desktop Navigation */}
                            <ul className="flex items-center space-x-6">
                                <li>
                                    <Link onClick={ClickHandler} href="/" 
                                        className="text-white hover:text-[#c0b596] transition-all text-sm uppercase">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} href="/about" 
                                        className="text-white hover:text-[#c0b596] transition-all text-sm uppercase">
                                        Who We Are
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} href="/practice" 
                                        className="text-white hover:text-[#c0b596] transition-all text-sm uppercase">
                                        Company Formation
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} href="/solutions" 
                                        className="text-white hover:text-[#c0b596] transition-all text-sm uppercase">
                                        Our Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} href="/contact" 
                                        className="text-white hover:text-[#c0b596] transition-all text-sm uppercase">
                                        Reach Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Search, Get in Touch, and Mobile Logo Container */}
                        <div className="flex items-center space-x-4">
                            {/* Search Icon */}
                            <div className="relative pl-6 border-l border-[rgba(255,255,255,.07)] lg:hidden">
                                <div className="text-white cursor-pointer" onClick={() => setSearchActive(!searchActive)}>
                                    <i className={`fi ti-search ${searchActive ? "ti-close" : "fi"}`}></i>
                                </div>
                                <div className={`absolute right-0 top-full mt-4 transition-all ${searchActive ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                                    <form onSubmit={(e) => e.preventDefault()} className="flex">
                                        <input 
                                            type="text" 
                                            placeholder="Search..." 
                                            className="w-[240px] px-4 py-2 text-sm border-0 focus:outline-none"
                                        />
                                        <button className="bg-[#272c3f] text-white px-4">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Get in Touch Button */}
                            <Link onClick={ClickHandler} href="/contact" 
                                className="bg-[#c0b596] text-white px-4 py-1.5 text-sm font-semibold hover:bg-[#d4c291] transition-all rounded-full">
                                Get in Touch
                            </Link>

                            {/* Logo - Only visible on mobile */}
                            <div className="hidden lg:block w-[50px]">
                                <Link onClick={ClickHandler} href="/" className="block">
                                    <Image 
                                        className="w-full h-auto rounded-full p-0.5 bg-white/10" 
                                        src={Logo} 
                                        alt="Logo"
                                        width={50}
                                        height={50}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-50 
                ${menuActive ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setMenuState(false)}
            />

            {/* Mobile Menu Panel */}
            <div className={`fixed top-0 left-0 w-[300px] h-full bg-[#272c3f] transform transition-transform duration-300 ease-out z-[60] 
                ${menuActive ? "translate-x-0" : "-translate-x-full"}`}>
                
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-700">
                    <Link href="/" className="block" onClick={() => setMenuState(false)}>
                        <Image 
                            src={Logo} 
                            alt="Logo" 
                            width={40} 
                            height={40} 
                            className="w-[40px] h-[40px] rounded-full p-0.5 bg-white/10 object-contain" 
                        />
                    </Link>
                    <button 
                        onClick={() => setMenuState(false)}
                        className="w-8 h-8 flex items-center justify-center text-white hover:text-[#c0b596] transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="px-5 py-6">
                    <ul className="space-y-4">
                        {[
                            { title: 'Home', link: '/' },
                            { title: 'Who We Are', link: '/about' },
                            { title: 'Company Formation', link: '/practice' },
                            { title: 'Our Solutions', link: '/solutions' },
                            { title: 'Reach Us', link: '/contact' }
                        ].map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href={item.link}
                                    className="block text-white hover:text-[#c0b596] transition-colors py-2 text-base font-medium"
                                    onClick={() => {
                                        ClickHandler();
                                        setMenuState(false);
                                    }}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact Info */}
                <div className="px-5 py-6 border-t border-gray-700">
                    <div className="space-y-4">
                        <div className="flex items-center text-white">
                            <i className="fa fa-map-marker text-[#cbbc99] text-xl w-8"></i>
                            <span className="text-sm">Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, UAE</span>
                        </div>
                        <div className="flex items-center text-white">
                            <i className="fa fa-phone text-[#cbbc99] text-xl w-8"></i>
                            <span className="text-sm">3164-5456854</span>
                        </div>
                        <div className="flex items-center text-white">
                            <i className="fa fa-clock-o text-[#cbbc99] text-xl w-8"></i>
                            <span className="text-sm">9AM - PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;