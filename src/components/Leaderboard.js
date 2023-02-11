import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ps1 from "../assets/scenes/pierre-roussel-ps1-phone2.jpg";
import ps2 from "../assets/scenes/pierre-roussel-ps2-phone2.jpg";
import ps3 from "../assets/scenes/pierre-roussel-ps3-phone2.jpg";
import ps4 from "../assets/scenes/pierre-roussel-ps4-phone2.jpg";
import Leaderboard1 from "./leaderboards/Leaderboard1";
import Leaderboard2 from "./leaderboards/Leaderboard2";
import Leaderboard3 from "./leaderboards/Leaderboard3";
import Leaderboard4 from "./leaderboards/Leaderboard4";

const Leaderboard = () => {
    return (
        <div className="leaderboard">
            <h1>LEADERBOARDS</h1>
            <div className="scenes">
                <Link to="/leaderboard/ps1">
                    <img src={ps1} alt="ps1" />
                </Link>
                <Link to="/leaderboard/ps2">
                    <img src={ps2} alt="ps2" />
                </Link>
                <Link to="/leaderboard/ps3">
                    <img src={ps3} alt="ps3" />
                </Link>
                <Link to="/leaderboard/ps4">
                    <img src={ps4} alt="ps4" />
                </Link>
            </div>
            <div>
                <Routes>
                    <Route path="/ps1" element={<Leaderboard1 />} />
                    <Route path="/ps2" element={<Leaderboard2 />} />
                    <Route path="/ps3" element={<Leaderboard3 />} />
                    <Route path="/ps4" element={<Leaderboard4 />} />
                </Routes>
            </div>
        </div>
    );
};

export default Leaderboard;
