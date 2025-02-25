import React from 'react'
import Link from "next/link";

const CaseStudies = (props) => {
    const steps = [
        {
            step: "STEP 1",
            title: "Getting the documentation together",
            icon: "fa fa-file-text",
            description: "Prepare all necessary documents including passport copies, visa copies, and other required paperwork for business registration."
        },
        {
            step: "STEP 2",
            title: "Getting a company licence",
            icon: "fa fa-certificate",
            description: "Select your business activity and obtain the appropriate trade license from the relevant authorities in the UAE."
        },
        {
            step: "STEP 3",
            title: "Starting the Visa application process",
            icon: "fa fa-id-card",
            description: "Begin the visa process for yourself and your employees, including medical tests and other requirements."
        },
        {
            step: "STEP 4",
            title: "Opening a U.A.E bank account",
            icon: "fa fa-bank",
            description: "Set up your corporate bank account with one of the UAE's leading financial institutions."
        }
    ];

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="py-[100px] bg-[#f8f8f8]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px]">
                        <span className="text-[16px] text-[#ada282]">Business Setup Guide</span>
                        <h2 className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#c0b596]">
                            Learn the Steps to Starting a Business in the United Arab Emirates
                        </h2>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[15px] md:left-[25px] top-0 bottom-0 w-[2px] bg-[#c0b596] opacity-20"></div>

                        {/* Steps */}
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex mb-16 last:mb-0 group">
                                {/* Step Circle */}
                                <div className="absolute left-0 w-[32px] h-[32px] md:w-[50px] md:h-[50px] bg-white rounded-full border-2 border-[#c0b596] flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-[#c0b596]">
                                    <i className={`${step.icon} text-[16px] md:text-[24px] text-[#c0b596] group-hover:text-white transition-all duration-300`}></i>
                                </div>

                                {/* Content */}
                                <div className="ml-[60px] md:ml-[80px]">
                                    <span className="inline-block px-3 py-1 bg-[#c0b596] text-white text-sm rounded mb-2">
                                        {step.step}
                                    </span>
                                    <h3 className="text-[24px] md:text-[28px] font-semibold text-[#272c3f] mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#666] text-[16px] leading-[1.8] mb-4">
                                        {step.description}
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
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaseStudies;