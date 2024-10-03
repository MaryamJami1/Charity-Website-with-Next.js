import React from 'react'

function survive() {
  return (
    <div>
               <div className="relative">
                <div className="bg flex justify-between text-white text-2xl font-semibold opacity-85 relative z-30 bg-fixed bg-cover bg-center h-[80vh] bg-[url('/images/k.jpg')]">

                </div>

                <div className="absolute text-white inset-0 flex flex-col justify-center z-30 px-4 md:px-8 lg:px-14 w-full md:w-[70%] lg:w-[50%]">
                    <p className="text-base md:text-lg">
                        You can make a difference
                    </p>

                    <h1 className="text-xl md:text-3xl lg:text-4xl font-serif pb-4 pt-3 leading-10">
                        Your support is critical to <br /> ensuring every child has the <br /> opportunity to survive.
                    </h1>

                    <div className="font-medium">
                        <button className="mt-4 md:mt-6 bg-[#ff9400] text-white rounded w-[50%] md:w-[8rem] h-[2.5rem] md:h-[3rem] hover:bg-orange-500 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                            Donate Today
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default survive
