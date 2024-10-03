import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div>
            <footer className="bg-[#f6f6f6]  pt-[4rem] pb-9">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        <div>
                            <div className="flex items-center mb-4">
                                <Image
                                    src="/images/logo-dark.png"
                                    alt="Responsive Image"
                                    width={30}
                                    height={30}
                                    loading="eager"
                                />

                            </div>
                            <p className="text-sm text-[#9e9e9e]">
                                Make your beautiful blog or magazine website with this stunning WordPress theme. Crafted with an eye for details and care by ThemeBubble.
                            </p>
                        </div>

                        {/* Second Child Div - Pages */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-black lg:px-[4rem]">Pages</h3>
                            <ul className='text-[#9e9e9e] lg:px-[4rem] '>
                                <li className="hover:underline">
                                    <Link href="#home" className="text-gray-400 hover:text-slate-600">Home</Link>
                                </li>
                                <li className="hover:underline">
                                    <Link href="#about" className="text-gray-400 hover:text-slate-600">About us</Link>
                                </li>
                                <li className="hover:underline">
                                    <Link href="#programs" className="text-gray-400 hover:text-slate-600">Programs</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Third Child Div - Contact Details */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-black">Contact Details</h3>
                            <p className='text-[#9e9e9e]'>221B Baker Street</p>
                            <p className='text-[#9e9e9e]'>(372) 587-2335</p>
                            <p className='text-[#9e9e9e]'>11 a.m - 12 p.m</p>
                        </div>

                        {/* Fourth Child Div - Newsletter Sign Up */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Sign up for Newsletter</h3>

                            <input
                                type="email"
                                className="w-full p-2 bg-white rounded text-[#9e9e9e] placeholder-gray-400"
                                placeholder="Email Address"
                            />
                            <button className="mt-2 bg-[#ff9400] text-white py-1 px-4 rounded">Sign Up</button>
                        </div>
                    </div>

                    {/* Footer Bottom Line */}
                    <div className="mt-8 text-center text-sm border-t text-[#9e9e9e] pt-5">
                        <p >© Built with pride and caffeine. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
