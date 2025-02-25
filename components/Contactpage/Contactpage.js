import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'

const Contactpage = () => {
    return (
        <section className="relative pt-[120px] pb-0 z-20">
            <div className="wraper">
                <div className="grid grid-cols-12">
                    <div className="col-span-1"></div>
                    <div className="col-span-10 md:col-span-12">
                        <div className="pb-[100px] sm:pb-[60px]">
                            <div className="grid grid-cols-12 gap-3">
                                <div className="col-span-4 md:col-span-6 sm:col-span-12 md:mb-7">
                                    <div className="text-center p-[40px] shadow-[0_5px_15px_0_rgba(62,65,159,0.1)] hover:shadow-lg transition-shadow duration-300">
                                        <div className="w-[85px] h-[85px] bg-[#f5f5f5] leading-[85px] text-center mx-auto rounded-[50%]">
                                            <div className="icon">
                                                <i className="text-[35px] leading-[85px] text-[#282e3f] fa fa-map-marker" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <h2 className="text-[25px] text-[#282e3f] font-medium my-[20px]">Head Office</h2>
                                        <p className="text-[#666] text-[16px] leading-[22px]">Building A1, Dubai Digital Park,</p>
                                        <p className="text-[#666] text-[16px] leading-[22px]">Dubai Silicon Oasis,</p>
                                        <p className="text-[#666] text-[16px] leading-[22px]">Dubai, UAE</p>
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-6 sm:col-span-12 md:mb-7">
                                    <div className="text-center p-[40px] shadow-[0_5px_15px_0_rgba(62,65,159,0.1)] hover:shadow-lg transition-shadow duration-300">
                                        <div className="w-[85px] h-[85px] bg-[#f5f5f5] leading-[85px] text-center mx-auto rounded-[50%]">
                                            <div className="icon">
                                                <i className="text-[35px] leading-[85px] text-[#282e3f] fa fa-envelope" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <h2 className="text-[25px] text-[#282e3f] font-medium my-[20px]">Email Us</h2>
                                        <p className="text-[#666] text-[16px] leading-[22px]">contact@beaconarabiaconsulting.com</p>
                                        <p className="text-[#666] text-[16px] leading-[22px] mt-2">Business Hours:</p>
                                        <p className="text-[#666] text-[16px] leading-[22px]">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                                <div className="col-span-4 md:col-span-6 sm:col-span-12 md:mb-7">
                                    <div className="text-center p-[40px] shadow-[0_5px_15px_0_rgba(62,65,159,0.1)] hover:shadow-lg transition-shadow duration-300">
                                        <div className="w-[85px] h-[85px] bg-[#f5f5f5] leading-[85px] text-center mx-auto rounded-[50%]">
                                            <div className="icon">
                                                <i className="text-[35px] leading-[85px] text-[#282e3f] fa fa-phone" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <h2 className="text-[25px] text-[#282e3f] font-medium my-[20px]">Call Us</h2>
                                        <p className="text-[#666] text-[16px] leading-[22px]">888 123-4587</p>
                                        <p className="text-[#666] text-[16px] leading-[22px] mt-2">WhatsApp:</p>
                                        <p className="text-[#666] text-[16px] leading-[22px]">+971 888 123-4587</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="max-w-[440px] mx-auto text-center mb-[50px]">
                            <h2 className="text-[35px] col:text-[25px] text-[#282e3f] font-base-font font-bold mb-[20px]">Get in Touch</h2>
                            <p className="text-[#666] text-[16px] leading-[22px]">Contact us for expert guidance on business setup and consulting services in Dubai. Our team is ready to assist you.</p>
                        </div>
                        <div className="p-[50px] bg-white mb-[-125px] relative z-10 shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,19%)] sm:p-7 sm:pt-[50px]">
                            <ContactForm />
                        </div> */}
                    </div>
                    <div className="col-span-1"></div>
                </div>
            </div>
            <div className="wpo-contact-map-section">
                <h2 className="hidden">Our Location</h2>
                <div className="h-[550px]">
                    <iframe 
                        className="w-full h-full border-0 outline-0 grayscale hover:grayscale-0 transition-all duration-300" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178530067875!2d55.37277597536754!3d25.214242977705288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6434c5d5c0d9%3A0x8e55fca1d4e102c8!2sDubai%20Digital%20Park%2C%20Dubai%20Silicon%20Oasis%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1708940444317!5m2!1sen!2sin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contactpage;
