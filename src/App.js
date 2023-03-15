import { Route, Routes, Link } from "react-router-dom"
import HomeRoute from "./pages/home"
import AboutRoute from "./pages/about"
import ListRoute from "./pages/list"
import DetailRoute from "./pages/detail";
import CreateRoute from "./pages/create";
import GameDetailRoute from "./pages/game_detail"
import GamesList from "./pages/games_list";
import GameEditRoute from "./pages/game_edit";
import { useEffect } from "react";

function App() 
{
    useEffect(()=>{
        let theme = localStorage.getItem("mode")
        let colour;
        if (theme=="tun"){
            colour="black"
        } else{
            colour="white"
        }
        document
        .getElementsByTagName("body")[0]
        .setAttribute("style", `background-color:${colour}`)
    }, [])
    return(
        <div id="sardor">
            <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/about" element={<AboutRoute/>} />
            <Route path="/characters" element={<ListRoute/>} />
            <Route path="/characters/:id" element={<DetailRoute/>} />
            <Route path="/games/create" element={<CreateRoute/>} />
            <Route path="/games"  element={<GamesList/>} />
            <Route path="/games/:gameId" element={<GameDetailRoute/>} />
            <Route path="/games/edit/:gameId" element={<GameEditRoute/>} />
          
        </Routes>
        </div>
    );
}
export default App

