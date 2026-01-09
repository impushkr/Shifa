

export default function Homepage(){
    return(
        <>
       <div className="h-[28vh] w-full overflow-hidden md:h-[40vh] lg:h-[80vh]">
            <img src="/homepage-1.jpg" alt="welcome-picture" className="relative lg:hidden" />
            <img src="/homepage-1-2.png" alt="welcome-picture" className="hidden relative lg:block lg:mt-[-100px]" />
            <button className="hidden lg:block lg:bg-pink-800  text-white font-semibold absolute top-150 h-[5vh] rounded-3xl ml-40 text-xl w-[10vw]">Shop Now</button>
        </div>



        
            <img src="/homepage-2.jpg" alt="welcome-picture" className="mt-15 mb-15 shadow" />
        
        
        </>
    )
}