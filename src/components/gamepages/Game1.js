import React, { useEffect, useState } from "react";
import ps1 from "../../assets/scenes/pierre-roussel-ps1-phone2.jpg";
import Dropdown from "../Dropdown";
import Fixed from "../Fixed";
import Modal from "../Modal";

const Game1 = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownCoordinates, setDropdownCoordinates] = useState({ left: "0%", top: "0%" });
    const [percentageCoordinates, setPercentageCoordinates] = useState(null);
    const characters = [
        "Heihachi Mishima (Tekken)",
        "Leon S. Kennedy (Resident Evil)",
        "Cloud Strife (Final Fantasy)",
    ];
    const [found, setFound] = useState({
        [characters[0]]: false,
        [characters[1]]: false,
        [characters[2]]: false,
    });
    const [isGame, setIsGame] = useState(false);
    const [gameTime, setGameTime] = useState(0);

    useEffect(() => {
        if (Object.keys(found).every((key) => found[key] === true)) {
            setIsGame(true);
        }
    }, [found]);

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
            <img onClick={handleDropdown} className="game-img" src={ps1} alt="" />
            {isDropdownOpen && (
                <Dropdown
                    setIsDropdownOpen={setIsDropdownOpen}
                    dropdownCoordinates={dropdownCoordinates}
                    characters={characters}
                    percentageCoordinates={percentageCoordinates}
                    setFound={setFound}
                    found={found}
                />
            )}
            <Fixed
                characters={characters}
                setGameTime={setGameTime}
                found={found}
                isGame={isGame}
            />
            {isGame && <Modal gameTime={gameTime} scene={"ps1"} />}
        </div>
    );
};

export default Game1;
