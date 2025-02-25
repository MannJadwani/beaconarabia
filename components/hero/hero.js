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
            description: "Setting up a business abroad can seem like an overwhelming experience and we're experts in setting businesses up in Dubai.",
            image: '/images/slider/slide-4.jpg'
        },
        {
            title: "Pro Services",
            description: "PRO services refer to paperwork, concerning governmental processing documents, and professional document clearing services.",
            image: '/images/slider/slide-5.jpg'
        },
        {
            title: "Bank Account Assistance",
            description: "The UAE is very popular for its well-settled banking industry and the great level of privacy the banks offer their clients.",
            image: '/images/slider/slide-1.jpg'
        },
        {
            title: "Business Loan",
            description: "Cash loan for existing business with 6 months old company is eligible to apply. Loan amount start from AED 100k to 1.5 million.",
            image: '/images/slider/slide-2.jpg'
        },
        {
            title: "Private Funding",
            description: "Arranging crowd based P2P funding from AED 100k to 1.5 million cash for 12 to 24 months @ 7.5 % flat interest P.A",
            image: '/images/slider/slide-3.jpg'
        },
        {
            title: "Vat & Tax Assistance",
            description: "In the United Arab Emirates, the new tax laws have made it mandatory that all the companies require to get VAT services Dubai.",
            image: '/images/slider/slide-6.jpg'
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
                            <div className="slide-inner slide-bg-image h-[790px] lg:h-[500px] col:h-[450px]" style={{ backgroundImage: `url(${service.image})` }}>
                                <div className="slide relative h-full bg-cover bg-no-repeat z-10 after:absolute after:content-[''] 
                                    after:w-full after:h-full after:left-0 after:top-0 after:opacity-70 after:z-10">
                                    <div className="wraper">
                                        <div className="slide-caption w-[700px] mt-[245px] lg:mt-[110px] md:mt-[120px] col:mt-[100px] absolute top-0 z-20">
                                            <h2 className="text-white text-[60px] leading-[90px] lg:text-[42px] lg:leading-[56px] 
                                                col:text-[25px] col:leading-[35px] font-normal my-[33px] md:my-[20px]">
                                                <span>{service.title}</span>
                                            </h2>
                                            <p className="text-white text-[20px] font-light col:text-[18px] mb-[30px]">{service.description}</p>
                                            <div className="btn-style">
                                                <Link onClick={ClickHandler} href="/contact" className="bg-[#c0b596] relative cursor-pointer text-[16px]
                                                    font-semibold text-white px-[38px] py-[12px] capitalize inline-block mt-[6px] 
                                                    transition ease-in-out duration-300 hover:bg-[#d4c291]
                                                    col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                                                    before:absolute before:content-[''] before:w-[85px] before:h-[2px] before:left-[-60px]
                                                    before:top-[50%] before:bg-white before:transform before:translate-y-[-50%] 
                                                    before:transition-all hover:before:left-[-95px] md:before:hidden">
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
