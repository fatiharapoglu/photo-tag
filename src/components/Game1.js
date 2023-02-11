import React, { useState } from "react";
import ps1 from "../assets/pierre-roussel-ps1-phone2.jpg";
import Dropdown from "./Dropdown";

const Game1 = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownCoordinates, setDropdownCoordinates] = useState({ left: "0%", top: "0%" });
    const [percentageCoordinates, setPercentageCoordinates] = useState(null);
    const characters = [
        "Heihachi Mishima (Tekken)",
        "Leon S. Kennedy (Resident Evil)",
        "Cloud Strife (Final Fantasy)",
    ];

    const getPercentageLocation = (e) => {
        const x = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
        const y = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);
        return { x, y };
    };

    const handleDropdown = (e) => {
        if (isDropdownOpen) {
            return setIsDropdownOpen(false);
        }
        const { x, y } = getPercentageLocation(e);
        console.log(x, y);
        setIsDropdownOpen(true);
        setPercentageCoordinates({ x, y });
        setDropdownCoordinates({ left: x + "%", top: y + "%" });
    };

    return (
        <div className="game">
            <img onClick={handleDropdown} className="game-img" src={ps1} alt="ps1" />
            {isDropdownOpen && (
                <Dropdown
                    dropdownCoordinates={dropdownCoordinates}
                    characters={characters}
                    percentageCoordinates={percentageCoordinates}
                />
            )}
            <div className="characters">
                <ul>
                    <li>{characters[0]}</li>
                    <li>{characters[1]}</li>
                    <li>{characters[2]}</li>
                </ul>
            </div>
        </div>
    );
};

export default Game1;
