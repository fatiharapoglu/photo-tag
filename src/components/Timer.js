import { useEffect, useState } from "react";

const Timer = (props) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (props.isGame) {
            return props.setGameTime(time);
        }
        if (props.isStarted === false) return;
        const timer = setInterval(() => {
            setTime((time) => time + 0.1);
        }, 100);
        return () => clearInterval(timer);
    }, [props]);

    return <span>{time.toFixed(1)}</span>;
};

export default Timer;
