import React, { useEffect, useState } from "react";
import ps1 from "../assets/scenes/pierre-roussel-ps1-phone2.jpg";
import ps2 from "../assets/scenes/pierre-roussel-ps2-phone2.jpg";
import ps3 from "../assets/scenes/pierre-roussel-ps3-phone2.jpg";
import ps4 from "../assets/scenes/pierre-roussel-ps4-phone2.jpg";
import Dropdown from "./Dropdown";
import Fixed from "./Fixed";
import Modal from "./Modal";

const Game = (props) => {
    let characters;
    let gameImageSrc;

    if (props.selectedScene === "ps1") {
        characters = [
            "Heihachi Mishima (Tekken)",
            "Leon S. Kennedy (Resident Evil)",
            "Cloud Strife (Final Fantasy)",
        ];
        gameImageSrc = ps1;
    } else if (props.selectedScene === "ps2") {
        characters = [
            "Kratos (God of War)",
            "Jimmy Hopkins (Bully)",
            "Tommy Vercetti (Grand Theft Auto)",
        ];
        gameImageSrc = ps2;
    } else if (props.selectedScene === "ps3") {
        characters = [
            "Ellie Williams (The Last Of Us)",
            "Nathan Drake (Uncharted)",
            "Snake (Metal Gear Solid)",
        ];
        gameImageSrc = ps3;
    } else if (props.selectedScene === "ps4") {
        characters = ["2B (Nier Automata)", "The Doll (Bloodborne)", "Joker (Persona)"];
        gameImageSrc = ps4;
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownCoordinates, setDropdownCoordinates] = useState({ left: "0%", top: "0%" });
    const [percentageCoordinates, setPercentageCoordinates] = useState(null);
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
            <img onClick={handleDropdown} className="game-img" src={gameImageSrc} alt="" />
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
                selectedScene={props.selectedScene}
            />
            {isGame && <Modal gameTime={gameTime} selectedScene={props.selectedScene} />}
        </div>
    );
};

export default Game;
