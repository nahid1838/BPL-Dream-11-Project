import BannerImg from "../assets/banner-main.png"

export function Banner() {
    
    return (
        <>
        
        <div className="container mx-auto my-8 text-center items-center flex flex-col gap-4 bg-linear-to-bl from-sky-700 via-black to-purple-500 h-[450px] rounded-2xl ">

            <img src={BannerImg} alt="" className="mx-auto pt-7" />

            <h2 className="text-3xl md:text-4xl font-bold text-white ">Assemble Your Ultimate Dream 11 Cricket Team</h2>

            <p className="text-white text-xl">Beyond Boundaries Beyond Limits</p>

            <button className="bg-[#E7FE29] rounded-md px-4 py-1.5 font-bold outline-1 outline-offset-4 outline-[#E7FE29] mx-auto cursor-pointer transition duration-300 hover:translate-y-1">Claim Free Credit</button>
        </div>
        
        </>
    )
}