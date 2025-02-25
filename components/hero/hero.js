import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";

const Hero = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const services = [
        {
            title: "Business Setup Services",
            description: "Setting up a business in Dubai is made simple with our expert guidance. We handle all aspects of company formation to ensure a smooth start for your business.",
            image: '/images/business/pexels-evonics-2086765.jpg'
        },
        {
            title: "Pro Services",
            description: "Our comprehensive PRO services cover all government-related paperwork, document processing, and regulatory compliance to keep your business running smoothly.",
            image: '/images/business/pexels-apasaric-325193.jpg'
        },
        {
            title: "Bank Account Assistance",
            description: "Navigate the UAE's prestigious banking sector with our expert assistance. We help you access world-class banking services with complete privacy and security.",
            image: '/images/business/pexels-ivan-siarbolin-1513699-3787839.jpg'
        },
        {
            title: "Business Loan",
            description: "Access flexible financing solutions designed for established businesses. Our loan services cater to various business needs with competitive terms.",
            image: '/images/business/pexels-thelazyartist-1302991.jpg'
        },
        {
            title: "Private Funding",
            description: "Connect with our network of private investors for sustainable funding solutions. We facilitate structured financing options tailored to your business goals.",
            image: '/images/business/pexels-mohdatir-30858244.jpg'
        },
        {
            title: "Vat & Tax Assistance",
            description: "Stay compliant with UAE tax regulations through our comprehensive VAT and tax advisory services. We ensure your business meets all requirements efficiently.",
            image: '/images/business/pexels-apasaric-618079.jpg'
        }
    ];

    return (
        <section className="hero relative h-[790px] lg:h-[500px] col:h-[450px] overflow-hidden z-20">
            <div className="hero-slider">
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    speed={1800}
                    parallax={true}
                    navigation
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-inner slide-bg-image h-[790px] lg:h-[500px] col:h-[450px]" 
                                style={{ 
                                    backgroundImage: `url(${service.image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                <div className="slide relative h-full bg-cover bg-no-repeat z-10 after:absolute after:content-[''] 
                                    after:w-full after:h-full after:left-0 after:top-0 after:bg-[#151a30] after:opacity-60 after:z-10">
                                    <div className="wraper">
                                        <div className="slide-caption w-[700px] mt-[245px] lg:mt-[110px] md:mt-[120px] col:mt-[100px] absolute top-0 z-20">
                                            <h2 className="text-white text-[60px] leading-[90px] lg:text-[42px] lg:leading-[56px] 
                                                col:text-[25px] col:leading-[35px] font-normal my-[33px] md:my-[20px]
                                                drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                                                <span>{service.title}</span>
                                            </h2>
                                            <p className="text-white text-[20px] font-light col:text-[18px] mb-[30px]
                                                drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">
                                                {service.description}
                                            </p>
                                            <div className="btn-style">
                                                <Link onClick={ClickHandler} href="/contact" 
                                                    className="bg-[#c0b596] relative cursor-pointer text-[16px]
                                                    font-semibold text-white px-[38px] py-[12px] capitalize inline-block mt-[6px] 
                                                    transition ease-in-out duration-300 hover:bg-[#d4c291]
                                                    col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                                                    before:absolute before:content-[''] before:w-[85px] before:h-[2px] before:left-[-60px]
                                                    before:top-[50%] before:bg-white before:transform before:translate-y-[-50%] 
                                                    before:transition-all hover:before:left-[-95px] md:before:hidden
                                                    shadow-lg">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Hero;
