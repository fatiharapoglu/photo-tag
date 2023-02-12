import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Main from "./components/Main";

const App = () => {
    const [selectedScene, setSelectedScene] = useState(null);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main setSelectedScene={setSelectedScene} />} />
                <Route path="/game" element={<Game selectedScene={selectedScene} />} />
                <Route
                    path="/leaderboard"
                    element={
                        <Leaderboard
                            selectedScene={selectedScene}
                            setSelectedScene={setSelectedScene}
                        />
                    }
                />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
