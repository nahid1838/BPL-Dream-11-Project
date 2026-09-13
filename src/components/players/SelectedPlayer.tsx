import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../type/Type";
import { TbTrash } from "react-icons/tb";
import { Bounce, toast } from "react-toastify";

export interface SelectedPlayerProps {
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: PlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

export default function SelectedPlayer({
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: SelectedPlayerProps) {
  

  const handleDeletePlayers = (player: PlayerType) => {
    const newSelectedPlayer = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName );
    setSelectedPlayers(newSelectedPlayer);
    
    toast.success(`${player.playerName} deleted from selected.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
      })

      setCoin(coin + player.price);
  }

  const handleDeleteAllSelectedPlayers = () => {
    setSelectedPlayers([]);

    toast.success("All selected players deleted.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
      })

      const totalCoin = selectedPlayers.reduce((total, player) => total + player.price, 0);

      setCoin(coin + totalCoin);
  }


  if (selectedPlayers.length === 0) {
    return (
        <h2 className="font-bold text-3xl text-gray-400 text-center container mx-auto my-10 border-2 py-20 rounded-3xl bg-gray-100 ">No selected players</h2>
    )
  }

  return (
    <>
      <div>
        {selectedPlayers.map((player) => {
          return (
            <div key={player.playerName} className="flex justify-between items-center container mx-auto border-2 border-gray-500 bg-linear-to-l from-gray-300 via-sky-300 to-purple-300 px-8 py-4 mb-5 rounded-md">
              <div className="flex gap-5">
                <img
                  src={player.playerImg}
                  alt=""
                  className="h-15 w-15 rounded-md"
                />
                <div>
                  <h3 className="font-bold text-3xl text-pink-400">{player.playerName}</h3>
                  <p className="font-semibold">{player.playerType}</p>
                </div>
              </div>
              <span className="font-bold text-2xl text-red-500 cursor-pointer" onClick={() => handleDeletePlayers(player)}>
                <TbTrash />
              </span>
            </div>
            
          );
        })}
      </div>
      

      {selectedPlayers.length > 0 ? <button onClick={handleDeleteAllSelectedPlayers} className="container mx-auto flex justify-center border w-fit px-7 py-2 rounded-lg font-semibold text-red-500 mt-15 mb-10 border-red-400 hover:bg-pink-200 cursor-pointer transition duration-300 hover:translate-y-1 shadow-lg hover:shadow-gray-600">Remove All Players</button> : "" }
    </>
  );
}
