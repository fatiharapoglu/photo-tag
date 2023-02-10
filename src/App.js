import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Main from "./components/Main";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/game" element={<Game />} />
                <Route path="/about" element={<About />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
