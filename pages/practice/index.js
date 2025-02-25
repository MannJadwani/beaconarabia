import React, { Fragment, useState } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Link from 'next/link';

const PracticePage = () => {
    const [activeTab, setActiveTab] = useState('mainland');
    const [activeFaq, setActiveFaq] = useState(null);

    const faqs = [
        {
            question: "What is Dubai mainland company?",
            answer: "A mainland company is a unit licensed by the Department of Economic Development in the concerned emirate of the UAE. There are several benefits to forming a mainland company. The company framework makes sure a wealthy future in your pro ventures."
        },
        {
            question: "How do I set up a company in the mainland?",
            answer: "Setting up a mainland company involves registering with the Department of Economic Development (DED), obtaining necessary licenses, and completing legal requirements. Our team guides you through each step of this process."
        },
        {
            question: "What are the benefits of a mainland company setup in Dubai?",
            answer: "Mainland companies can trade freely both within and outside the UAE, operate anywhere in Dubai, and take on government contracts. They also have no restrictions on business activities."
        },
        {
            question: "Can a company be set up in Dubai mainland without a sponsor?",
            answer: "As per UAE law, foreign investors need a local sponsor for mainland company setup. However, we can help facilitate this requirement through our trusted network."
        },
        {
            question: "What is the difference between mainland and Freezone?",
            answer: "Mainland companies can operate anywhere in the UAE and trade directly with the local market, while Freezone companies are restricted to operating within their free zone and need a local agent for mainland trading."
        },
        {
            question: "What is mainland license?",
            answer: "A mainland license is a trade license issued by the Department of Economic Development that allows companies to conduct business activities within the UAE mainland territory."
        }
    ];

    const getTabButtonClass = (tab) => {
        return `px-8 py-3 text-lg font-semibold rounded-lg transition-all ${
            activeTab === tab
                ? 'bg-[#c0b596] text-white'
                : 'bg-white text-[#272c3f] hover:bg-[#c0b596] hover:text-white'
        }`;
    };

    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Business Setup'} pagesub={'Services'}/> 

            {/* Hero Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#272c3f] mb-6">Business Setup</h1>
                        <p className="text-xl text-gray-600 mb-8">Business setup with expert guidance.</p>
                        <p className="text-gray-600 leading-relaxed">
                            Are you planning to create a successful mainland company in the UAE? The series of steps in mainland 
                            business setup involves thorough knowledge of the UAE market. And, team Expertden is ready with our 
                            unique assistance through this process!
                        </p>
                    </div>
                </div>
            </section>

            {/* Business Setup Types */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['mainland', 'offshore', 'freezone'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={getTabButtonClass(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)} Business Setup
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl mx-auto">
                        {activeTab === 'mainland' && (
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-[#272c3f] mb-6">Mainland Business Set Up - Dubai</h2>
                                <p className="text-gray-600 mb-6">
                                    Having a trusted business partner is essential to setting up a business in Dubai. A land of infinite 
                                    possibilities and spirits, Dubai is a thriving space for local traders as well as international entrepreneurs.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    Our experience over the years in business setup is huge and vast. Thus, we can readily assist you through 
                                    the tiring journey. For a mainland business to begin, it's a must to register with the Department of 
                                    Economic Development.
                                </p>
                                <p className="text-gray-600">
                                    All legal work is handled securely by our talented team. A mainland company in Dubai is a wide-open 
                                    platform to nurture your entrepreneurial skills. With an excellent support system like Expertden, 
                                    you get the best business solutions; easy and smooth!
                                </p>
                            </div>
                        )}

                        {activeTab === 'offshore' && (
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-[#272c3f] mb-6">Offshore Business Set Up - Dubai</h2>
                                <p className="text-gray-600 mb-6">
                                    With huge perks in tax policies, offshore companies are great ways to enjoy financial outgrowth in business. 
                                    The policies initiated by the Dubai government provide a secure place for foreign investors.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    Investors' rights are safeguarded at all levels. Besides, you can easily conduct trade activities around 
                                    the Middle East if you register an offshore company in Dubai.
                                </p>
                                <p className="text-gray-600">
                                    A business start-up agency like Expertden is your ideal partner for company incorporation. We assist you 
                                    in establishing the business while maintaining the confidentiality of all your financial assets.
                                </p>
                            </div>
                        )}

                        {activeTab === 'freezone' && (
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <h2 className="text-3xl font-bold text-[#272c3f] mb-6">Freezone Business Set Up in Dubai</h2>
                                <p className="text-gray-600 mb-6">
                                    Having a trusted business partner is essential to setting up a business in Dubai. A land of infinite 
                                    possibilities and spirits, Dubai is a thriving space for local traders as well as international entrepreneurs.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    Our experience over the years in business setup is huge and vast. Thus, we can readily assist you through 
                                    the tiring journey. For a mainland business to begin, it's a must to register with the Department of 
                                    Economic Development.
                                </p>
                                <p className="text-gray-600">
                                    All legal work is handled securely by our talented team. With an excellent support system like Expertden, 
                                    you get the best business solutions; easy and smooth!
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#272c3f] text-center mb-12">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg">
                                    <button
                                        className="w-full flex justify-between items-center p-4 text-left"
                                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    >
                                        <span className="font-semibold text-[#272c3f]">{faq.question}</span>
                                        <span className={`transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}>
                                            <i className="fa fa-chevron-down text-[#c0b596]"></i>
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                                        <p className="p-4 text-gray-600 border-t">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#272c3f] mb-6">Get In Touch</h2>
                        <p className="text-xl text-gray-600 mb-8">Schedule a session and set up your business in Dubai today.</p>
                        <p className="text-gray-600 mb-8">
                            With UAE's booming economy, more and more people are setting up their businesses in Dubai. 
                            To get your business started today, you'll need to register your company with the Corporate 
                            Department and then book a company name reservation.
                        </p>
                        <Link 
                            href="/contact"
                            className="inline-flex items-center space-x-2 bg-[#c0b596] text-white px-8 py-4 rounded-lg hover:bg-[#272c3f] transition-all duration-300 text-lg font-semibold"
                        >
                            <span>Contact Us</span>
                            <i className="fa fa-arrow-right ml-2"></i>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer/>
            <Scrollbar/>
        </Fragment>
    );
};

export default PracticePage;

