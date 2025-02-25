import React from 'react'
import Link from "next/link";
import Logo from '/public/images/logo.png'
import Image from 'next/image';

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="relative bg-[#151a30] z-10">
            <div className="pt-[100px] pb-[90px] md:py-[90px] md:pb-[20px] overflow-hidden relative -z-10">
                <div className="wraper">
                    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
                        <div className="lg:pr-8 md:mb-[40px] relative text-left">
                            <div className="mb-7">
                                <Link className="inline-block" href="/">
                                    <Image className="w-full h-auto object-contain  bg-white/10 p-0.5" src={Logo} alt="Logo" />
                                </Link>
                            </div>
                            <p className="text-gray-300 text-[16px] mb-[20px] leading-relaxed">
                                Your trusted partner in business setup and consulting services in Dubai. With over 30 years of experience, we help businesses thrive in the UAE market.
                            </p>
                        </div>
                        <div className="lg:px-4 md:mb-[40px] relative text-left">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-medium text-white capitalize relative pb-[15px] before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-[#c0b596]">Quick Links</h3>
                            </div>
                            <ul className="space-y-3">
                                <li><Link className="text-gray-300 hover:text-[#c0b596] transition-all inline-block" href="/home">Home</Link></li>
                                <li><Link className="text-gray-300 hover:text-[#c0b596] transition-all inline-block" href="/about">Who We Are</Link></li>
                                <li><Link className="text-gray-300 hover:text-[#c0b596] transition-all inline-block" href="/practice">Company Formation</Link></li>
                                <li><Link className="text-gray-300 hover:text-[#c0b596] transition-all inline-block" href="/solutions">Our Solutions</Link></li>
                                <li><Link className="text-gray-300 hover:text-[#c0b596] transition-all inline-block" href="/contact">Reach Us</Link></li>
                            </ul>
                        </div>
                        <div className="lg:px-4 md:mb-[40px] relative text-left">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-medium text-white capitalize relative pb-[15px] before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-[#c0b596]">Our Services</h3>
                            </div>
                            <ul className="space-y-3">
                                <li><Link className="text-gray-300 hover:text-[#c0b596] transition-all inline-block" href="/#services" onClick={ClickHandler}>Business Setup Services</Link></li>
                                <li><Link className="text-gray-300 hover:text-[#c0b596] transition-all inline-block" href="/#services" onClick={ClickHandler}>PRO Services</Link></li>
                                <li><Link className="text-gray-300 hover:text-[#c0b596] transition-all inline-block" href="/#services" onClick={ClickHandler}>Bank Account Assistance</Link></li>
                                <li><Link className="text-gray-300 hover:text-[#c0b596] transition-all inline-block" href="/#services" onClick={ClickHandler}>Business Financing</Link></li>
                                <li><Link className="text-gray-300 hover:text-[#c0b596] transition-all inline-block" href="/#services" onClick={ClickHandler}>Tax & VAT Services</Link></li>
                            </ul>
                        </div>
                        <div className="lg:pl-4 md:mb-[40px] relative text-left">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-medium text-white capitalize relative pb-[15px] before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-[#c0b596]">Contact Info</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <i className="fa fa-map-marker text-[#c0b596] mt-1"></i>
                                    <div className="text-gray-300">
                                        <p className="font-medium text-white mb-1">Head Office</p>
                                        <p>Building A1, Dubai Digital Park,</p>
                                        <p>Dubai Silicon Oasis, Dubai, UAE</p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i className="fa fa-phone text-[#c0b596]"></i>
                                    <span className="text-gray-300">888 123-4587</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i className="fa fa-envelope text-[#c0b596]"></i>
                                    <span className="text-gray-300">contact@beaconarabiaconsulting.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wraper">
                <div className="border-t border-[#ffffff1a] relative">
                    <p className="text-center text-gray-400 text-[14px] py-[20px]">
                        © {new Date().getFullYear()} Beacon Arabia Consulting. All rights reserved | Privacy Policy
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;