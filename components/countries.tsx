import React from 'react'
import { DiJira } from "react-icons/di";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineAlert, AiOutlineSlack } from "react-icons/ai";

export default function Countries() {
    return (
        <div>
            <div className="mt-16">

                <div>
                    <h2 className="text-center text-2xl md:text-3xl lg:text-4xl text-gray-800 px-4 md:px-0">
                        World’s leading organisation working to protect <br />
                        and improve the lives of every child in over 190 countries.
                    </h2>
                </div>


                <div className="text-gray-800 py-16 flex flex-wrap justify-center md:justify-evenly gap-8 md:gap-4 font-semibold border-b-4">
                    <div className="text-center">
                        <DiJira className="text-[#ff9400] text-4xl md:text-5xl bg-[#fff7eb] rounded-full p-2 animate-[jump_1s_ease-in-out_infinite]" />
                        <p className="mt-2 text-sm md:text-base">
                            We deliver long-term <br /> international development
                        </p>
                    </div>
                    <div className="text-center">
                        <FaHandHoldingHeart className="text-[#ff9400] text-4xl md:text-5xl bg-[#fff7eb] rounded-full p-2 animate-[jump_1s_ease-in-out_infinite]" />
                        <p className="mt-2 text-sm md:text-base">
                            We advocate for children <br /> by influencing policy
                        </p>
                    </div>
                    <div className="text-center">
                        <AiOutlineAlert className="text-[#ff9400] text-4xl md:text-5xl bg-[#fff7eb] rounded-full p-2 animate-[jump_1s_ease-in-out_infinite]" />
                        <p className="mt-2 text-sm md:text-base">
                            We provide steady, ongoing <br /> support for children
                        </p>
                    </div>
                    <div className="text-center">
                        <AiOutlineSlack className="text-[#ff9400] text-4xl md:text-5xl bg-[#fff7eb] rounded-full p-2 animate-[jump_1s_ease-in-out_infinite]" />
                        <p className="mt-2 text-sm md:text-base">
                            We respond to <br /> humanitarian emergencies
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
