import React from "react";
import Timer from "./Timer";

const Fixed = (props) => {
    return (
        <div className="fixed">
            <div>
                <h1>
                    <span className="word">find</span>This
                </h1>
                <ul className="characters">
                    <li>
                        <img src={props.src1} alt="character" />
                        <span
                            className={props.found[props.characters[0]] ? "name crossed" : "name"}
                        >
                            {props.characters[0]}
                        </span>
                    </li>
                    <li>
                        <img src={props.src2} alt="character" />
                        <span
                            className={props.found[props.characters[1]] ? "name crossed" : "name"}
                        >
                            {props.characters[1]}
                        </span>
                    </li>
                    <li>
                        <img src={props.src3} alt="character" />
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
