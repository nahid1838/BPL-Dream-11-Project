import type { Dispatch, SetStateAction } from "react";
import type { PlayerType } from "../type/Type";
import { TbTrash } from "react-icons/tb";

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
    setCoin(coin + player.price);
  }


  if (selectedPlayers.length === 0) {
    return (
        <h2 className="font-bold text-3xl text-gray-400 text-center mx-auto my-10">No selected players</h2>
    )
  }

  return (
    <>
      <div>
        {selectedPlayers.map((player) => {
          return (
            <div key={player.playerName} className="flex justify-between items-center container mx-auto border-2 border-gray-500 px-8 py-4 mb-5 rounded-md">
              <div className="flex gap-5">
                <img
                  src={player.playerImg}
                  alt=""
                  className="h-15 w-15 rounded-md"
                />
                <div>
                  <h3 className="font-bold text-3xl">{player.playerName}</h3>
                  <p>{player.playerType}</p>
                </div>
              </div>
              <span className="font-bold text-2xl text-red-500 cursor-pointer" onClick={() => handleDeletePlayers(player)}>
                <TbTrash />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
