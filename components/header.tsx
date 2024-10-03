import Image from "next/image"
import Link from "next/link"



function Header() {
    return (
        <div className="main" id="#home">


            <div className="relative">

                <div className="bg-custom flex justify-between text-white text-2xl font-semibold opacity-85 relative z-30">
                    <div className="py-6 px-4 md:px-12">
                        <Image
                            src="/images/logo-white.png"
                            alt="Responsive Image"
                            width={40}
                            height={40}
                            loading="eager"
                        />
                    </div>

                    <div className="py-6 px-4 md:px-9 text-lg md:text-xl h-[4rem]">
                        <ul className="flex flex-wrap gap-2">
                            <li className="hover:text-[#ff9400] hover:bg-[#fff7eb] rounded-md px-2 py-1 transition-opacity duration-1000 hover:opacity-90">
                                <Link href="/">Home</Link>
                            </li>
                            
                            <li className="hover:text-[#ff9400] hover:bg-[#fff7eb] rounded-md px-2 py-1 transition-opacity duration-1000 hover:opacity-90">
                                <Link href="#programs">Programs</Link>
                            </li>
                            <li className="hover:text-[#ff9400] hover:bg-[#fff7eb] rounded-md px-2 py-1 transition-opacity duration-1000 hover:opacity-90">
                                <Link href="#volunteers">volunteers</Link>
                            </li>
                            <li className="hover:text-[#ff9400] hover:bg-[#fff7eb] rounded-md px-2 py-1 transition-opacity duration-1000 hover:opacity-90">
                                <Link href="#about">About</Link>
                            </li>
                            <div>
                                <button className="text-[#ff9400] mt-1 pb-2 w-[5.5rem] md:w-[6.5rem]  h-[2rem] font-bold rounded-full hover:bg-[#fff7eb] hover:text-black transition-transform duration-300 hover:scale-105">
                                    Donate
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="absolute text-white inset-0 flex flex-col justify-center z-30 px-6 md:px-14 w-[90%] md:w-[50%]">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl pt-6 md:pt-9 font-semibold leading-tight">
                        You can <br /> make a <br /> difference
                    </h1>
                    <p className="text-lg md:text-xl leading-7 mt-4">
                        Apparently we had reached a great height in the atmosphere, <br /> for the sky was a dead black, and the stars had ceased <br /> to twinkle. By the same illusion which lifts the horizon.
                    </p>
                    <div className="font-medium">
                        <button className="mt-6 bg-[#ff9400] text-white rounded w-[9rem] md:w-[11rem] h-[2.5rem] md:h-[3rem] text-sm md:text-lg hover:bg-orange-500 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            Start Donate Today
                        </button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Header
