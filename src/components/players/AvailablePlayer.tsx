import type { Dispatch, SetStateAction } from "react";
import PlayerCard from "../player/PlayerCard";
import type { PlayerType } from "../type/Type";

export interface AvailablePlayersProps {
  players: PlayerType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: PlayerType[];
  setSelectedPlayers: Dispatch<SetStateAction<PlayerType[]>>;
}

export default function AvailablePlayers({ 
  players, 
  coin, 
  setCoin, 
  selectedPlayers, 
  setSelectedPlayers 
}: AvailablePlayersProps) {


  return (
    <>
      <div className="grid bg-[#F8FAFC] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[70px]">
        {players.map((player, index) => (
          <PlayerCard key={index} player={player}
          coin={coin} setCoin={setCoin}
          selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
          ></PlayerCard>
        ))}
      </div>
    </>
  );
}
