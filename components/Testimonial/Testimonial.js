import React from "react";
import Link from "next/link";
import Image from "next/image";
import businessImg from '/public/images/testimonial/1.png';

const Testimonial = (props) => {
    const businessOptions = [
        {
            title: "Business Start-Up in Dubai Mainland",
            description: "Do you wish to establish your own business in Dubai? If yes, then the Mainland is the best area to get started. It is the perfect area giving opportunities to the private sector, designated by the Dubai Economic Department(DED). Get the chance to begin your new business in Dubai with high-quality standards.",
            icon: "fa fa-building"
        },
        {
            title: "Business Start-Up in Freezone",
            description: "The economy of the UAE is based on two main sectors, which include Onshore and Offshore sectors. Relevant authorities assign the Freezones where the foreigners can completely own the companies. Here, they do not require a local partner with 51%. We suggest you go for the Freezone if you are a foreigner.",
            icon: "fa fa-globe"
        }
    ];

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`relative bg-[#f8f8f8] ${props.tClass}`}>
            <div className="wraper">
                <div className="grid grid-cols-12 gap-8 items-center">
                    <div className="col-span-5 md:col-span-6 sm:col-span-12 sm:order-2">
                        <div className="relative">
                            <div className="relative z-10">
                                <Image 
                                    src={businessImg} 
                                    alt="Business Setup in Dubai" 
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#c0b596] rounded-lg z-0"></div>
                        </div>
                    </div>
                    <div className="col-span-7 md:col-span-6 sm:col-span-12 sm:order-1">
                        <div className="pl-8 md:pl-0">
                            <div className="text-left sm:text-center mb-12">
                                <span className="text-[16px] text-[#ada282] mb-2 block">Business Setup Services</span>
                                <h2 className="text-[36px] md:text-[28px] font-medium text-[#333] pb-4 relative">
                                    Start a Business in Dubai With Minimum Cost
                                </h2>
                                <p className="text-[#666] text-[16px] leading-[1.8]">
                                    We provide our best services for setting up a new business all over UAE
                                </p>
                            </div>

                            <div className="space-y-8">
                                {businessOptions.map((option, index) => (
                                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 mr-4">
                                                <div className="w-12 h-12 bg-[#c0b596] rounded-full flex items-center justify-center">
                                                    <i className={`${option.icon} text-white text-xl`}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-[22px] font-semibold text-[#272c3f] mb-3">
                                                    {option.title}
                                                </h3>
                                                <p className="text-[#666] text-[15px] leading-[1.8] mb-4">
                                                    {option.description}
                                                </p>
                                                <Link 
                                                    onClick={ClickHandler} 
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;