// src/components/Scoreboard.jsx
import React, { useEffect } from "react";

const [timer, setTimer] = React.useState();
const [points, setPoints] = React.useState(0);


export const Scoreboard = () => {
    useEffect(() => {
        if (timer > 0) {
            const timer = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);

            return () => clearInterval(timer); // Clean up the timer on unmount or when time ends
        }
    }, [timer, setTimer]);

    return (
        <div className="flex flex-col items-center mb-4">
            <p className="text-2xl">Score: {points}</p>
            <p className="text-2xl">Time: {timer}s</p>
        </div>
    );
};
