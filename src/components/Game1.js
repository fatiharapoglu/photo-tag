import React, { useState } from "react";
import ps1 from "../assets/pierre-roussel-ps1-phone2.jpg";
import Dropdown from "./Dropdown";

const Game1 = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownCoordinates, setDropdownCoordinates] = useState({ left: "0%", top: "0%" });

    const percentageLocation = (e) => {
        const x = Math.round((e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100);
        const y = Math.round((e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100);
        return { x, y };
    };

    const handleDropdown = (e) => {
        if (isDropdownOpen) {
            return setIsDropdownOpen(false);
        }
        const { x, y } = percentageLocation(e);
        setIsDropdownOpen(true);
        setDropdownCoordinates({ left: x + "%", top: y + "%" });
    };

    return (
        <div className="game">
            <img onClick={handleDropdown} className="game-img" src={ps1} alt="ps1" />
            {isDropdownOpen && <Dropdown dropdownCoordinates={dropdownCoordinates} />}
            <div className="characters">
                <ul>
                    <li>Char1</li>
                    <li>Char2</li>
                    <li>Char3</li>
                </ul>
            </div>
        </div>
    );
};

export default Game1;
