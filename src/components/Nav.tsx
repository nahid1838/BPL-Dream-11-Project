import { FaSackDollar } from "react-icons/fa6"
import NavLogo from "../assets/logo.png"

interface NavProps {
    coin: number;
}

export function Nav({coin}: NavProps) {
    
    return (
        <>
        
        <div className="flex justify-between container mx-auto mt-4 items-center">
            <img src={NavLogo} alt="" />

            <div className="flex gap-9 items-center">
                <ul className="hidden md:flex gap-9">
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                </ul>

                <p className="top-4 z-50 flex items-center justify-center font-bold  gap-1 border border-gray-300 px-2 py-1.5 rounded-md bg-white">
                {coin} Coin
                <FaSackDollar className="text-yellow-500" />
                </p>
            </div>
        </div>
        
        </>
    )
}