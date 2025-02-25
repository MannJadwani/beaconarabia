import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import founderImg from '/public/images/team/founder.jpg';

const Attorney = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const founderInfo = {
        name: "Pratapsingh Nathani",
        title: "Founder & CEO",
        description: "With over 30 years of extensive experience in business consulting and company formation, Pratapsingh Nathani has established himself as a visionary leader in the UAE business sector. His expertise in strategic planning, business development, and regulatory compliance has helped countless entrepreneurs successfully establish and grow their businesses in the region.",
        achievements: [
            "30+ years of industry experience",
            "Expert in UAE business regulations",
            "Trusted advisor to numerous successful enterprises",
            "Specialist in business setup and development"
        ],
        socialLinks: {
            linkedin: "#",
            twitter: "#",
            facebook: "#"
        }
    };

    return (
        <section className="py-[100px] bg-[#f8f8f8]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px]">
                        <span className="text-[16px] text-[#ada282]">Leadership</span>
                        <h2 className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#c0b596]">
                            Meet Our Founder
                        </h2>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-12 gap-8 items-center">
                        <div className="col-span-5 md:col-span-12">
                            <div className="relative">
                                <div className="relative z-10">
                                    <Image 
                                        src={founderImg} 
                                        alt={founderInfo.name}
                                        width={400}
                                        height={500}
                                        className="rounded-lg shadow-xl w-full"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#c0b596] rounded-lg z-0"></div>
                            </div>
                        </div>

                        <div className="col-span-7 md:col-span-12">
                            <div className="pl-8 md:pl-0 md:mt-12">
                                <h3 className="text-[32px] font-semibold text-[#272c3f] mb-2">
                                    {founderInfo.name}
                                </h3>
                                <span className="text-[#c0b596] text-[18px] font-medium block mb-6">
                                    {founderInfo.title}
                                </span>
                                <p className="text-[#666] text-[16px] leading-[1.8] mb-8">
                                    {founderInfo.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-[20px] font-semibold text-[#272c3f] mb-4">Key Expertise</h4>
                                    <ul className="grid grid-cols-2 gap-4">
                                        {founderInfo.achievements.map((achievement, index) => (
                                            <li key={index} className="flex items-center text-[#666]">
                                                <i className="fa fa-check-circle text-[#c0b596] mr-2"></i>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex space-x-4">
                                    <Link href={founderInfo.socialLinks.linkedin} className="w-10 h-10 rounded-full bg-[#c0b596] flex items-center justify-center text-white hover:bg-[#272c3f] transition-all">
                                        <i className="fa fa-linkedin"></i>
                                    </Link>
                                    <Link href={founderInfo.socialLinks.twitter} className="w-10 h-10 rounded-full bg-[#c0b596] flex items-center justify-center text-white hover:bg-[#272c3f] transition-all">
                                        <i className="fa fa-twitter"></i>
                                    </Link>
                                    <Link href={founderInfo.socialLinks.facebook} className="w-10 h-10 rounded-full bg-[#c0b596] flex items-center justify-center text-white hover:bg-[#272c3f] transition-all">
                                        <i className="fa fa-facebook"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Attorney;
