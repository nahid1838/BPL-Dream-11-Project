import { Suspense, useState } from "react";
import { Banner } from "./components/Banner"
import { Nav } from "./components/Nav"
import Players from "./components/players/Players";
import type { PlayerType } from "./components/type/Type";
import Footer from "./components/Footer";


const playersPromise = async(): Promise<PlayerType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

const playersPromiseResult = playersPromise();


function App() {

  const [coin, setCoin] = useState(5000000);

  return (
    <>

      <Nav coin={coin}></Nav>
      
      <Banner></Banner>

      <Suspense fallback={<h3>Loading.....</h3>}> 
        <Players playersPromise={playersPromiseResult}
        coin={coin} setCoin={setCoin}
        ></Players>
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App
