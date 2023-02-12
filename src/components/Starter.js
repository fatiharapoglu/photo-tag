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
        <div className="starter">
            <h1>GET READY</h1>
            <div className="starter-characters">Characters</div>
            <div className="countdown">{countdown}</div>
        </div>
    );
};

export default Starter;
