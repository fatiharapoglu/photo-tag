import React from "react";
import Timer from "./Timer";
import heihachi from "../assets/characters/heihachi.jpg";
import leon from "../assets/characters/leon.jpg";
import cloud from "../assets/characters/cloud.jpg";

const Fixed = (props) => {
    let src1, src2, src3;

    if (props.characters[0] === "Heihachi Mishima (Tekken)") {
        src1 = heihachi;
        src2 = leon;
        src3 = cloud;
    }

    return (
        <div className="fixed">
            <div>
                <h1>findThis</h1>
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
                <Timer isGame={props.isGame} setGameTime={props.setGameTime} />
            </div>
        </div>
    );
};

export default Fixed;
