import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
import founderImg from '/public/images/team/founder.png';

const AboutPage = () => {
    const services = [
        {
            title: "Business Setup Services",
            description: "Setting up a business abroad can seem like an overwhelming experience and we're experts in setting businesses up in Dubai.",
            icon: "fa fa-building"
        },
        {
            title: "PRO Services",
            description: "PRO services refer to paperwork, concerning governmental processing documents, and professional document clearing services.",
            icon: "fa fa-file-text"
        },
        {
            title: "Bank Account Assistance",
            description: "The UAE is very popular for its well-settled banking industry and the great level of privacy the banks offer their clients.",
            icon: "fa fa-bank"
        }
    ];

    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'About Us'} pagesub={'Who We Are'}/> 

            {/* About Section */}
            <section className="py-12 md:py-20 bg-white px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
                        <span className="text-[#c0b596] text-base md:text-lg font-medium mb-3 md:mb-4 block">Our Story</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#272c3f] mb-4 md:mb-6">Excellence in Business Consulting</h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed px-4 md:px-0">
                            We are a full-service business consulting company founded by Pratapsingh Nathani, 
                            a visionary leader with over 30 years of extensive experience in the industry. 
                            At our core, we believe in the excellence of work. Our commitment to delivering 
                            exceptional service and innovative solutions has made us a trusted partner for 
                            businesses seeking growth and success in the region.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <span className="text-[#c0b596] text-base md:text-lg font-medium mb-2 block">Our Leadership</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#272c3f] mb-4">Meet Our Founder</h2>
                        </div>

                        {/* Founder Content */}
                        <div className="flex flex-row md:flex-col gap-8 items-start">
                            {/* Image Column */}
                            <div className="relative">
                                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                                    <Image 
                                        src={founderImg} 
                                        alt="Pratapsingh Nathani"
                                        width={600}
                                        height={800}
                                        className="w-full h-auto object-cover z-10 bg-white"
                                        priority
                                    />
                                </div>
                                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#c0b596] rounded-lg z-0"></div>
                            </div>

                            {/* Content Column */}
                            <div className="lg:pl-8">
                                <div className="bg-white rounded-lg p-8 shadow-lg">
                                    <div className="flex flex-col mb-8">
                                        <h2 className="text-3xl font-bold text-[#272c3f] mb-2">Pratapsingh Nathani</h2>
                                        <h3 className="text-xl text-[#c0b596] font-medium mb-6">Founder & CEO</h3>
                                        <div className="flex space-x-4 mt-4">
                                            <a href="https://www.linkedin.com/in/pratapnathani/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#c0b596] flex items-center justify-center text-white hover:bg-[#272c3f] transition-all">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                            <a href="https://x.com/pratapnathani?lang=ar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#c0b596] flex items-center justify-center text-white hover:bg-[#272c3f] transition-all">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            With over 30 years of extensive experience in business consulting and company formation, 
                                            Pratapsingh Nathani has established himself as a visionary leader in the UAE business sector. 
                                            His expertise in strategic planning, business development, and regulatory compliance has helped 
                                            countless entrepreneurs successfully establish and grow their businesses in the region.
                                        </p>

                                        <div className="border-t border-gray-100 pt-8">
                                            <h4 className="text-xl font-semibold text-[#272c3f] mb-6">Areas of Expertise</h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                                                    <i className="fa fa-check-circle text-[#c0b596] text-xl"></i>
                                                    <span className="text-gray-700">30+ Years Industry Experience</span>
                                                </div>
                                                <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                                                    <i className="fa fa-check-circle text-[#c0b596] text-xl"></i>
                                                    <span className="text-gray-700">UAE Business Expert</span>
                                                </div>
                                                <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                                                    <i className="fa fa-check-circle text-[#c0b596] text-xl"></i>
                                                    <span className="text-gray-700">Strategic Business Planning</span>
                                                </div>
                                                <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                                                    <i className="fa fa-check-circle text-[#c0b596] text-xl"></i>
                                                    <span className="text-gray-700">Business Development</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <Link 
                                                href="/contact"
                                                className="inline-flex items-center space-x-2 bg-[#c0b596] text-white px-6 py-3 rounded-lg hover:bg-[#272c3f] transition-all duration-300 text-base"
                                            >
                                                <span>Get in Touch</span>
                                                <i className="fa fa-arrow-right ml-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 md:py-20 bg-white px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-[#c0b596] text-base md:text-lg font-medium mb-3 md:mb-4 block">What We Offer</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#272c3f] mb-4 md:mb-6">Our Key Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4 md:px-0">
                            We provide comprehensive business solutions tailored to your needs, helping you navigate 
                            the complexities of establishing and growing your business in the UAE.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <div key={index} className="group bg-white p-6 md:p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                                    <div className="flex-shrink-0 mb-4 md:mb-0">
                                        <div className="h-[60px] w-[60px] md:h-[70px] md:w-[70px] flex items-center justify-center border-2 border-[#c0b596] rounded-full transition-all duration-300 group-hover:bg-[#c0b596] mx-auto md:mx-0">
                                            <i className={`${service.icon} text-[24px] md:text-[30px] text-[#c0b596] group-hover:text-white transition-all duration-300`}></i>
                                        </div>
                                    </div>
                                    <div className="md:ml-6">
                                        <h3 className="text-xl md:text-[22px] font-semibold text-[#272c3f] mb-3 transition-all duration-300 group-hover:text-[#c0b596]">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm md:text-base">{service.description}</p>
                                        <Link 
                                            href="/contact"
                                            className="inline-block text-[#c0b596] text-[14px] font-semibold hover:text-[#272c3f] transition-all duration-300"
                                        >
                                            Learn More →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default AboutPage;

