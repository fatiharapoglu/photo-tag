import { useEffect, useState } from "react";

import ps1 from "../assets/scenes/pierre-roussel-ps1-phone2.jpg";
import ps2 from "../assets/scenes/pierre-roussel-ps2-phone2.jpg";
import ps3 from "../assets/scenes/pierre-roussel-ps3-phone2.jpg";
import ps4 from "../assets/scenes/pierre-roussel-ps4-phone2.jpg";
import heihachi from "../assets/characters/heihachi.jpg";
import leon from "../assets/characters/leon.jpg";
import cloud from "../assets/characters/cloud.jpg";
import kratos from "../assets/characters/kratos.jpg";
import jimmy from "../assets/characters/jimmy.jpg";
import tommy from "../assets/characters/tommy.jpg";
import ellie from "../assets/characters/ellie.jpg";
import nathan from "../assets/characters/nathan.jpg";
import snake from "../assets/characters/snake.jpg";
import twob from "../assets/characters/twob.jpg";
import doll from "../assets/characters/doll.jpg";
import joker from "../assets/characters/joker.jpg";
import Dropdown from "./Dropdown";
import Fixed from "./Fixed";
import Modal from "./Modal";
import Starter from "./Starter";

const Game = (props) => {
    let characters;
    let gameImageSrc;
    let charImgSrc1, charImgSrc2, charImgSrc3;

    if (props.selectedScene === "ps1") {
        characters = [
            "Heihachi Mishima (Tekken)",
            "Leon S. Kennedy (Resident Evil)",
            "Cloud Strife (Final Fantasy)",
        ];
        gameImageSrc = ps1;
        charImgSrc1 = heihachi;
        charImgSrc2 = leon;
        charImgSrc3 = cloud;
    } else if (props.selectedScene === "ps2") {
        characters = [
            "Kratos (God of War)",
            "Jimmy Hopkins (Bully)",
            "Tommy Vercetti (Grand Theft Auto)",
        ];
        gameImageSrc = ps2;
        charImgSrc1 = kratos;
        charImgSrc2 = jimmy;
        charImgSrc3 = tommy;
    } else if (props.selectedScene === "ps3") {
        characters = [
            "Ellie Williams (The Last Of Us)",
            "Nathan Drake (Uncharted)",
            "Snake (Metal Gear Solid)",
        ];
        gameImageSrc = ps3;
        charImgSrc1 = ellie;
        charImgSrc2 = nathan;
        charImgSrc3 = snake;
    } else if (props.selectedScene === "ps4") {
        characters = ["2B (Nier Automata)", "The Doll (Bloodborne)", "Joker (Persona)"];
        gameImageSrc = ps4;
        charImgSrc1 = twob;
        charImgSrc2 = doll;
        charImgSrc3 = joker;
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
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if (isStarted === true) return;
        setTimeout(() => {
            setIsStarted(true);
        }, 5000);
    }, [isStarted]);

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
        setIsDropdownOpen(true);
        setPercentageCoordinates({ x, y });
        setDropdownCoordinates({ left: x + "%", top: y + "%" });
    };

    return (
        <div className={isStarted ? "game" : "game disabled"}>
            {isStarted === false && (
                <Starter
                    isStarted={isStarted}
                    characters={characters}
                    src1={charImgSrc1}
                    src2={charImgSrc2}
                    src3={charImgSrc3}
                />
            )}
            <img onClick={handleDropdown} className="game-img" src={gameImageSrc} alt="" />
            {isDropdownOpen && (
                <Dropdown
                    setIsDropdownOpen={setIsDropdownOpen}
                    dropdownCoordinates={dropdownCoordinates}
                    characters={characters}
                    percentageCoordinates={percentageCoordinates}
                    setFound={setFound}
                    found={found}
                    handleSnackbar={props.handleSnackbar}
                />
            )}
            <Fixed
                characters={characters}
                setGameTime={setGameTime}
                found={found}
                isGame={isGame}
                selectedScene={props.selectedScene}
                isStarted={isStarted}
                src1={charImgSrc1}
                src2={charImgSrc2}
                src3={charImgSrc3}
            />
            {isGame && (
                <Modal
                    gameTime={gameTime}
                    selectedScene={props.selectedScene}
                    handleSnackbar={props.handleSnackbar}
                />
            )}
        </div>
    );
};

export default Game;
