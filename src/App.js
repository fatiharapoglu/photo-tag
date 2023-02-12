import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Game1 from "./components/gamepages/Game1";
import Game2 from "./components/gamepages/Game2";
import Game3 from "./components/gamepages/Game3";
import Game4 from "./components/gamepages/Game4";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Main from "./components/Main";

const App = () => {
    const [selectedGame, setSelectedGame] = useState(null);
    const [selectedLeaderboard, setSelectedLeaderboard] = useState(null);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/game/ps1" element={<Game1 />} />
                <Route path="/game/ps2" element={<Game2 />} />
                <Route path="/game/ps3" element={<Game3 />} />
                <Route path="/game/ps4" element={<Game4 />} />
                <Route path="/leaderboard/*" element={<Leaderboard />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
