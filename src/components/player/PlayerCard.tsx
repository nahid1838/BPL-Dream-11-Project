import { useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../type/Type";
import { Bounce, toast } from "react-toastify";

export interface PlayerCardProps {
  player: PlayerType;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: PlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

export default function PlayerCard({ 
    player, 
    coin, 
    setCoin,
    selectedPlayers,
    setSelectedPlayers
}: PlayerCardProps) {

  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPlayer = () => {
    setIsSelected(true);

    const newTotalCoin = coin - player.price;

    if (newTotalCoin >= 0) {
        setCoin(newTotalCoin);
        toast.success(`${player.playerName} chosed successfully`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce
        })
    }
    else {
        toast.error(`${coin} is not anough to chose this player`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce
        })
    }


    // Selected players Logic
    setSelectedPlayers([...selectedPlayers, player]);
  }

  return (
    <>
      <div className=" container mx-auto w-full mb-10 max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Player Image */}
        <div className="relative h-72 overflow-hidden bg-gray-100">
          <img
            src={player.playerImg}
            alt={player.playerName}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />

          {/* Player Type */}
          <span className="absolute right-4 top-4 rounded-full bg-black/80 px-4 py-1 text-sm font-semibold text-white">
            {player.playerType}
          </span>
        </div>

        {/* Player Information */}
        <div className="p-5">
          <h2 className="mb-1 text-2xl font-bold text-gray-900">
            {player.playerName}
          </h2>

          <p className="mb-4 text-sm text-gray-500">🌍 {player.origin}</p>

          {/* Details */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-gray-100 p-3">
              <p className="text-xs text-gray-500">Batting</p>
              <p className="font-semibold text-gray-800">
                {player.battingStyle}
              </p>
            </div>

            <div className="rounded-lg bg-gray-100 p-3">
              <p className="text-xs text-gray-500">Bowling</p>
              <p className="font-semibold text-gray-800">
                {player.bowlingStyle}
              </p>
            </div>
          </div>

          {/* Price */}
          <div className="mt-5 flex items-center justify-between border-t pt-4">
            <div>
              <p className="text-xs text-gray-500">Player Price</p>
              <p className="text-2xl font-bold text-green-600">
                ${player.price}
              </p>
            </div>

            <button
              onClick={() => handleSelectPlayer()}
              disabled={isSelected}
              className={`rounded-lg px-5 py-2.5 font-semibold text-white transition ${
                isSelected
                  ? "cursor-not-allowed  bg-gray-400"
                  : "bg-green-600 cursor-pointer hover:bg-green-700"
              }`}
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
