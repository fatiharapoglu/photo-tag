import React from "react";
import Timer from "./Timer";
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

const Fixed = (props) => {
    let src1, src2, src3;

    if (props.selectedScene === "ps1") {
        src1 = heihachi;
        src2 = leon;
        src3 = cloud;
    } else if (props.selectedScene === "ps2") {
        src1 = kratos;
        src2 = jimmy;
        src3 = tommy;
    } else if (props.selectedScene === "ps3") {
        src1 = ellie;
        src2 = nathan;
        src3 = snake;
    } else if (props.selectedScene === "ps4") {
        src1 = twob;
        src2 = doll;
        src3 = joker;
    }

    return (
        <div className="fixed">
            <div>
                <h1>
                    <span className="word">find</span>This
                </h1>
                <ul className="characters">
                    <li>
                        <img src={src1} alt="character" />
                        <span
                            className={props.found[props.characters[0]] ? "name crossed" : "name"}
                        >
                            {props.characters[0]}
                        </span>
                    </li>
                    <li>
                        <img src={src2} alt="character" />
                        <span
                            className={props.found[props.characters[1]] ? "name crossed" : "name"}
                        >
                            {props.characters[1]}
                        </span>
                    </li>
                    <li>
                        <img src={src3} alt="character" />
                        <span
                            className={props.found[props.characters[2]] ? "name crossed" : "name"}
                        >
                            {props.characters[2]}
                        </span>
                    </li>
                </ul>
            </div>
            <div className="timer">
                <Timer
                    isGame={props.isGame}
                    setGameTime={props.setGameTime}
                    isStarted={props.isStarted}
                />
            </div>
        </div>
    );
};

export default Fixed;
