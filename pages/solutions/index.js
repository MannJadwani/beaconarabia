import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const SolutionsPage = () => {
    const solutions = [
        {
            title: "Business Setup Services",
            description: "Setting up a business abroad can seem like an overwhelming experience and we're experts in setting businesses up in Dubai. Our comprehensive setup services guide you through every step of establishing your business presence in the UAE, ensuring compliance with local regulations while minimizing complexities.",
            icon: "fa fa-building"
        },
        {
            title: "PRO Services",
            description: "PRO services refer to paperwork, concerning governmental processing documents, and professional document clearing services. We handle all aspects of document processing, visa applications, and government relations to ensure smooth operations for your business in the UAE.",
            icon: "fa fa-file-text"
        },
        {
            title: "Bank Account Assistance",
            description: "The UAE is very popular for its well-settled banking industry and the great level of privacy the banks offer their clients. We facilitate the entire process of setting up corporate and personal bank accounts, leveraging our strong relationships with major UAE banks.",
            icon: "fa fa-bank"
        },
        {
            title: "Business Loan",
            description: "We provide comprehensive business loan solutions for established companies in the UAE. Our financing options are designed to support business growth and expansion, with flexible terms and competitive rates tailored to your business needs.",
            icon: "fa fa-money"
        },
        {
            title: "Private Funding",
            description: "Access alternative funding solutions through our network of private investors. We facilitate peer-to-peer funding arrangements with transparent terms and structured repayment plans, helping businesses secure the capital they need for growth.",
            icon: "fa fa-line-chart"
        },
        {
            title: "VAT & Tax Assistance",
            description: "In the United Arab Emirates, the new tax laws have made it mandatory that all companies require VAT services in Dubai. Our tax experts ensure full compliance with UAE tax regulations while optimizing your tax position through proper planning and documentation.",
            icon: "fa fa-calculator"
        }
    ];

    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Our Solutions'} pagesub={'Comprehensive Business Services'}/> 

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#272c3f] mb-6">Business Solutions in Dubai</h2>
                        <p className="text-xl text-gray-600">Comprehensive services to support your business growth in the UAE</p>
                    </div>

                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 gap-8">
                            {solutions.map((solution, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-[#c0b596] flex items-center justify-center">
                                                <i className={`${solution.icon} text-white text-2xl`}></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold text-[#272c3f] mb-4">{solution.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
            <Scrollbar/>
        </Fragment>
    );
};

export default SolutionsPage; 