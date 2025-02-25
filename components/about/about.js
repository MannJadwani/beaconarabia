import React from 'react'
import Link from "next/link";
import about from '/public/images/business/pexels-evonics-2086765.jpg'
import Image from 'next/image';

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const highlights = [
        {
            title: "30+ Years Experience",
            description: "Extensive expertise in UAE business setup and consulting",
            icon: "fa fa-history"
        },
        {
            title: "Expert Team",
            description: "Dedicated professionals with deep industry knowledge",
            icon: "fa fa-users"
        },
        {
            title: "Proven Success",
            description: "Track record of successful business establishments",
            icon: "fa fa-trophy"
        }
    ];

    return (
        <section className="pt-[120px] pb-[100px]">
            <div className="wraper">
                <div className="grid grid-cols-12 items-center gap-8">
                    <div className="col-span-6 md:col-span-12">
                        <div className="relative mb-[20px]">
                            <div className="relative max-w-[520px] before:absolute before:bg-[#c0b596] before:w-full before:h-full before:content-[''] before:-z-10 before:left-[-20px] before:top-[-20px]">
                                <Image 
                                    className="w-full rounded-lg shadow-xl" 
                                    src={about} 
                                    alt="Modern Office Space"
                                    width={520}
                                    height={400}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-12">
                        <div className="mb-[20px]">
                            <span className="text-[#c0b596] text-[16px] font-medium mb-2 block">Who We Are</span>
                            <h2 className="text-[#282e3f] text-[36px] font-semibold mb-6">Your Trusted Business Partner in Dubai</h2>
                            <p className="text-[#666] text-[16px] leading-[28px] mb-[30px]">
                                We are a full-service business consulting company founded by Pratapsingh Nathani, 
                                a visionary leader with over three decades of extensive experience in the industry. 
                                Our deep understanding of the UAE market and regulatory landscape enables us to provide 
                                unparalleled guidance to businesses.
                            </p>
                            <p className="text-[#666] text-[16px] leading-[28px] mb-[30px]">
                                At our core, we believe in the excellence of work. Our commitment to delivering 
                                exceptional service and innovative solutions has made us a trusted partner for 
                                businesses seeking growth and success in the region.
                            </p>

                            <div className="grid grid-cols-3 gap-4 mb-8 md:grid-cols-1">
                                {highlights.map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className="w-10 h-10 rounded-full bg-[#c0b596] flex items-center justify-center">
                                                <i className={`${item.icon} text-white`}></i>
                                            </div>
                                            <h3 className="text-[#282e3f] text-[18px] font-medium">{item.title}</h3>
                                        </div>
                                        <p className="text-[#666] text-[14px] leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center space-x-6">
                                <Link 
                                    onClick={ClickHandler} 
                                    href="/solutions" 
                                    className="bg-[#c0b596] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[12px] rounded-lg capitalize inline-block transition ease-in-out duration-300 hover:bg-[#d4c291] shadow-md hover:shadow-lg"
                                >
                                    Learn More
                                </Link>
                                <Link 
                                    onClick={ClickHandler} 
                                    href="/contact" 
                                    className="border-2 border-[#c0b596] cursor-pointer text-[16px] font-semibold text-[#c0b596] px-[38px] py-[12px] rounded-lg capitalize inline-block transition ease-in-out duration-300 hover:bg-[#c0b596] hover:text-white"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;