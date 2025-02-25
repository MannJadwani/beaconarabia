import React from 'react'

const PageTitle = (props) => {
    return (
        <section className="page-title min-h-[550px] sm:min-h-[300px] relative flex justify-start items-center z-30 bg-no-repeat bg-center bg-cover text-left before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#151a30]/70 before:z-[-1]" 
            style={{ backgroundImage: `url(${'/images/business/pexels-cytonn-955395.jpg'})` }}>
            <div className="wraper relative">
                <div className="page-title-inner">
                    <div className="page-title-content">
                        <h2 className="text-[60px] md:text-[40px] sm:text-[30px] text-white font-bold mb-3">{props.pageTitle}</h2>
                        <div className="breadcrumb">
                            <ul className="flex items-center">
                                <li className="text-[#c0b596] text-[20px] md:text-[16px] capitalize font-medium">
                                    <a href="/">Home</a>
                                </li>
                                <li className="text-white text-[20px] md:text-[16px] capitalize font-medium mx-2">/</li>
                                <li className="text-white text-[20px] md:text-[16px] capitalize font-medium">
                                    {props.pagesub}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;