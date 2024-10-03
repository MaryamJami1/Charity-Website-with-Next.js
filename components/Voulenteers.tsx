import React from 'react'
import Link from "next/link"


function Voulenteers() {
    return (
        <div>
            <div className="text-center text-4xl text-gray-800 pt-[4rem]" id='volunteers'>
                <h2>
                    Our top volunteers who helped <br />
                    millions of children around the globe.
                </h2>
            </div>

            <div className="pb-[2rem] pt-[4rem] flex flex-wrap justify-center gap-6">

                <div className="h-[25rem] w-[15rem] bg-white shadow-lg shadow-slate-400/40 rounded-lg transition-transform duration-300 hover:-translate-y-4">
                    <div className="h-[18rem] bg-center bg-cover bg-[url('/images/photo-1500648767791-00dcc994a43e.jpg')] rounded-lg"></div>
                    <div className="text-center font-serif border-b-2 border-[#4c4c4c11] py-4">
                        <h4 className="text-xl">Ann Yong</h4>
                        <p className="text-[#4c4c4ca0] text-sm">Marketing Consultant</p>
                    </div>
                    <div>
                        <ul className="flex justify-evenly py-1 text-xs text-[#4c4c4ca0]">
                            <li><Link href={"https://www.linkedin.com/login"}>LinkedIn |</Link></li>
                            <li><Link href={"https://www.facebook.com/login/"}>Facebook |</Link></li>
                            <li><Link href={"https://www.google.co.uk/"}>Google</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="h-[25rem] w-[15rem] bg-white shadow-lg shadow-slate-400/40 rounded-lg transition-transform duration-300 hover:-translate-y-4">
                    <div className="h-[18rem] bg-center bg-cover bg-[url('/images/photo-1513732822839-24f03a92f633.jpg')] rounded-lg"></div>
                    <div className="text-center font-serif border-b-2 border-[#4c4c4c11] py-4">
                        <h4 className="text-xl">Robert Links</h4>
                        <p className="text-[#4c4c4ca0] text-sm">Accounting Consultant</p>
                    </div>
                    <div>
                        <ul className="flex justify-evenly py-1 text-xs text-[#4c4c4ca0]">
                            <li><Link href={"https://www.linkedin.com/login"}>LinkedIn |</Link></li>
                            <li><Link href={"https://www.facebook.com/login/"}>Facebook |</Link></li>
                            <li><Link href={"https://www.google.co.uk/"}>Google</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="h-[25rem] w-[15rem] bg-white shadow-lg shadow-slate-400/40 rounded-lg transition-transform duration-300 hover:-translate-y-4">
                    <div className="h-[18rem] bg-center bg-cover bg-[url('/images/photo-1544005313-94ddf0286df2.jpg')] rounded-lg"></div>
                    <div className="text-center font-serif border-b-2 border-[#4c4c4c11] py-4">
                        <h4 className="text-xl">Carl Johnson</h4>
                        <p className="text-[#4c4c4ca0] text-sm">Finance Consultant</p>
                    </div>
                    <div>
                        <ul className="flex justify-evenly py-1 text-xs text-[#4c4c4ca0]">
                            <li><Link href={"https://www.linkedin.com/login"}>LinkedIn |</Link></li>
                            <li><Link href={"https://www.facebook.com/login/"}>Facebook |</Link></li>
                            <li><Link href={"https://www.google.co.uk/"}>Google</Link></li>
                        </ul>
                    </div>
                </div>


                <div className="h-[25rem] w-[15rem] bg-white shadow-lg shadow-slate-400/40 rounded-lg transition-transform duration-300 hover:-translate-y-4">
                    <div className="h-[18rem] bg-center bg-cover bg-[url('/images/photo-1514448553123-ddc6ee76fd52.jpg')] rounded-lg"></div>
                    <div className="text-center font-serif border-b-2 border-[#4c4c4c11] py-4">
                        <h4 className="text-xl">Marissa Mayer</h4>
                        <p className="text-[#4c4c4ca0] text-sm">Media Consultant</p>
                    </div>
                    <div>
                        <ul className="flex justify-evenly py-1 text-xs text-[#4c4c4ca0]">
                            <li><Link href={"https://www.linkedin.com/login"}>LinkedIn |</Link></li>
                            <li><Link href={"https://www.facebook.com/login/"}>Facebook |</Link></li>
                            <li><Link href={"https://www.google.co.uk/"}>Google</Link></li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Voulenteers
