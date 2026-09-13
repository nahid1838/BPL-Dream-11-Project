import { Suspense, useState } from "react";
import { Banner } from "./components/Banner"
import { Nav } from "./components/Nav"
import Players from "./components/players/Players";
import type { PlayerType } from "./components/type/Type";
import Footer from "./components/Footer";
import TopPlayers from "./components/TopPlayers";
import TeamCTA from "./components/Teams";
import AboutUs from "./components/AboutUs";


const playersPromise = async(): Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

const playersPromiseResult = playersPromise();


function App() {

  const [coin, setCoin] = useState(10000000);

  return (
    <>

      <Nav coin={coin}></Nav>
      
      <Banner></Banner>

      <TopPlayers></TopPlayers>

      <Suspense fallback={<h3>Loading.....</h3>}> 
        <Players playersPromise={playersPromiseResult}
        coin={coin} setCoin={setCoin}
        ></Players>
      </Suspense>

      <AboutUs></AboutUs>

      <TeamCTA></TeamCTA>

      <Footer></Footer>
    </>
  )
}

export default App
