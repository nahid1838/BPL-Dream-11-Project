
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

    const newTotalCoin = coin - player.price;

    if (newTotalCoin >= 0) {
      setIsSelected(true);

      setCoin(newTotalCoin);

      // Selected players Logic
      setSelectedPlayers([...selectedPlayers, player]);

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
      });
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
      });
    }
  };

  return (
    <>
      <div
        className="
          container mx-auto
          mb-10
          w-full
          max-w-sm
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-[#F1F5F9]
          shadow-md
          transition
          duration-300
          hover:-translate-y-2
          hover:border-purple-200
          hover:shadow-2xl
        "
      >

        {/* Player Image */}
        <div className="relative h-72 overflow-hidden bg-slate-200">

          <img
            src={player.playerImg}
            alt={player.playerName}
            className="
              h-full
              w-full
              object-cover
              object-top
              transition
              duration-500
              hover:scale-105
            "
          />

          {/* Player Type */}
          <span
            className="
              absolute
              right-4
              top-4
              rounded-full
              bg-[#17152F]/90
              px-4
              py-1
              text-sm
              font-semibold
              text-white
              shadow-md
              backdrop-blur-sm
            "
          >
            {player.playerType}
          </span>
        </div>

        {/* Player Information */}
        <div className="p-5">

          <h2 className="mb-1 text-2xl font-bold text-[#0F172A]">
            {player.playerName}
          </h2>

          <p className="mb-4 text-sm text-slate-500">
            🌍 {player.origin}
          </p>

          {/* Details */}
          <div className="grid grid-cols-2 gap-3">

            <div className="rounded-xl border border-slate-200 bg-white/80 p-3 transition duration-300 hover:border-sky-200 hover:shadow-sm">
              <p className="text-xs font-medium text-slate-500">
                Batting
              </p>

              <p className="font-semibold text-slate-800">
                {player.battingStyle}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white/80 p-3 transition duration-300 hover:border-purple-200 hover:shadow-sm">
              <p className="text-xs font-medium text-slate-500">
                Bowling
              </p>

              <p className="font-semibold text-slate-800">
                {player.bowlingStyle}
              </p>
            </div>

          </div>

          {/* Price */}
          <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">

            <div>
              <p className="text-xs text-slate-500">
                Player Price
              </p>

              <p className="text-2xl font-bold text-sky-700">
                ${player.price}
              </p>
            </div>

            <button
              onClick={() => handleSelectPlayer()}
              disabled={isSelected}
              className={`
                rounded-lg
                px-5
                py-2.5
                font-semibold
                transition
                duration-300
                ${
                  isSelected
                    ? "cursor-not-allowed bg-slate-400 text-white"
                    : "cursor-pointer bg-[#E7FE29] text-slate-900 hover:-translate-y-1 hover:bg-[#d9f000] hover:shadow-lg"
                }
              `}
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
