import React, { useEffect, useState } from "react";

const Starter = (props) => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if (props.isStarted) {
            return;
        }
        const timer = setInterval(() => {
            setCountdown((countdown) => countdown - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [props.isStarted]);

    return (
        <div className="modal">
            <h1>GET READY</h1>
            <div className="countdown">{countdown}</div>
            <h3>Find these PlayStation characters.</h3>
            <div className="starter-characters">
                <ul>
                    <li>
                        {props.characters[0]}
                        <img src={props.src1} alt="" />
                    </li>
                    <li>
                        {props.characters[1]}
                        <img src={props.src2} alt="" />
                    </li>
                    <li>
                        {props.characters[2]}
                        <img src={props.src3} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Starter;
