import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../type/Type";
import AvailablePlayers from "./AvailablePlayer";
import SelectedPlayer from "./SelectedPlayer";

interface PlayersProps {
  playersPromise: Promise<PlayerType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
  const players = use(playersPromise);

  const [buttonType, setButtonType] = useState<"available" | "selected">("available")
  const [selectedPlayers, setSelectedPlayers] = useState<PlayerType[]>([]);

  const handleUpdateButtonType = (type : "available" | "selected") => {
    setButtonType(type);
  }


  
  return (
    <>
      <div className="flex container mx-auto justify-between mt-[70px] mb-10">
        <h3 className="font-bold text-3xl">{buttonType === "available" ? "Available Players" : "Selected Players"}</h3>
        <div>
          <button onClick={() => handleUpdateButtonType("available")} className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}>Available</button>
          <button onClick={() => handleUpdateButtonType("selected")} className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}>Selected</button>
        </div>
      </div>

      {buttonType === "available" ? <AvailablePlayers players={players}
      coin={coin} setCoin={setCoin}
      selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
      ></AvailablePlayers> : <SelectedPlayer
      coin={coin} setCoin={setCoin}
      selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
      ></SelectedPlayer>}
    </>
  );
};

export default Players;
