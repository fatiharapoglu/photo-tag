import React from "react";
import ps1 from "../assets/scenes/pierre-roussel-ps1-phone2.jpg";
import ps2 from "../assets/scenes/pierre-roussel-ps2-phone2.jpg";
import ps3 from "../assets/scenes/pierre-roussel-ps3-phone2.jpg";
import ps4 from "../assets/scenes/pierre-roussel-ps4-phone2.jpg";
import LeaderboardData from "./LeaderboardData";

const Leaderboard = (props) => {
    const selectScene = (e) => {
        const selected = e.target.alt;
        props.setSelectedScene(selected);
    };

    return (
        <div className="leaderboard">
            <h1>LEADERBOARDS</h1>
            <div className="scenes">
                <button onClick={selectScene}>
                    <img src={ps1} alt="ps1" />
                </button>
                <button onClick={selectScene}>
                    <img src={ps2} alt="ps2" />
                </button>
                <button onClick={selectScene}>
                    <img src={ps3} alt="ps3" />
                </button>
                <button onClick={selectScene}>
                    <img src={ps4} alt="ps4" />
                </button>
            </div>
            <LeaderboardData selectedScene={props.selectedScene} />
        </div>
    );
};

export default Leaderboard;
