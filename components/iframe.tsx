function Iframe(){
return(
    
    <div className="flex flex-col lg:flex-row pt-1 pb-[7rem] space-y-8 lg:space-y-0 lg:space-x-0">
    <div className="video w-full lg:w-[50%]">
        <iframe className="w-full h-[300px] md:h-[400px] lg:h-[500px]" src="https://www.youtube.com/embed/tsCjrZQWI7s?si=OmyfNNrjFulZDq6Q" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
    <div className="bg-[#fafafa] w-full lg:w-[50%] px-4 py-6 lg:px-[3.5rem] lg:py-[3rem]">
        <h2 className="text-2xl md:text-3xl font-serif text-[#222222bd]">
            We deliver long-term <br /> international development <br /> programs, including <br /> education, nutrition, and <br /> health care.
        </h2>
        <p className="py-4 md:py-8 font-serif text-[#4c4c4ca0]">
            I also believe its important for every member to be involved <br /> and invested in our company and this is one way to do so <br /> crank this out products need full resourcing and support from <br /> a cross-functional team.
        </p>
        <div className="font-medium">
            <button className="mt-4 md:mt-6 bg-[#ff9400] text-white rounded w-full md:w-[11rem] h-[3rem] hover:bg-orange-500 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                Learn More
            </button>
        </div>
    </div>
</div>
)
}

export default Iframe