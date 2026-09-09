import BannerImg from "../assets/banner-main.png"

export function Banner() {
    
    return (
        <>
        
        <div className="container mx-auto my-8 text-center items-center flex flex-col gap-4 bg-[#131313] h-[450px] rounded-2xl ">
            <img src={BannerImg} alt="" className="mx-auto pt-7" />
            <h2 className="text-3xl md:text-4xl font-bold text-white ">Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className="text-white text-xl">Beyond Boundaries Beyond Limits</p>
            <button className="bg-[#E7FE29] rounded-md px-3 py-1.5 font-semibold outline-1 outline-offset-4 outline-[#E7FE29] mx-auto cursor-pointer ">Claim Free Credit</button>
        </div>
        
        </>
    )
}