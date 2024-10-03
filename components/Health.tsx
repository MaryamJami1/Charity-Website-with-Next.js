import React from 'react'
import Image from "next/image"


function Health() {
    return (
        <div>
        <div className="text-center text-4xl text-gray-800 pt-[4rem] font-semibold " id='about'>
            <h2>About Us</h2>
        </div>
    
        <div className="flex flex-col md:flex-row py-11">
           
            <div className="bg-[#fafafa] w-full md:w-[50%] px-[3rem] py-9">
                <h2 className="text-3xl font-serif text-[#222222bd]">
                    We deliver long-term <br /> international development <br /> programs, including <br /> education, nutrition, and <br /> health care.
                </h2>
                <p className="py-4 font-serif text-[#4c4c4ca0]">
                    I also believe it's important for every member to be involved <br /> and invested in our company and this is one way to do so <br /> crank this out products need full resourcing and support from <br /> a cross-functional team.
                </p>
                <div className="font-medium">
                    <button className="mt-6 bg-[#ff9400] text-white rounded w-[11rem] h-[3rem] hover:bg-orange-500 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                        Learn More
                    </button>
                </div>
            </div>
    
            
            <div className="flex justify-center md:w-[50%] ">
                <Image
                    src="/images/photo-1497655392221-e645087843da-1.jpg"
                    alt="Responsive Image"
                    width={700}
                    height={960}
                    loading="eager"
                  
                />
            </div>
        </div>
    </div>
    
    )
}

export default Health
