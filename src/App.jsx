import { useState } from "react";
import Timer from "./components/Timer.jsx";
import { Field } from "./components/Field.jsx";

function Game() {
    const [time, setTime] = useState(0); // Single source of truth for time
    const [points, setPoints] = useState(0); // Pass points to Timer if needed

    return (
        <div className="flex flex-col items-center gap-4 space-y-6 bg-green-800">
            <Timer time={time} setTime={setTime} points={points}/>
            <Field time={time} setPoints={setPoints}/>
            <button
                onClick={() => {
                    setTime(5); // Reset time
                    setPoints(0); // Reset points
                }}
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Start Game
            </button>
            <button
                onClick={() => {
                    setTime(5); // Reset time
                    setPoints(0); // Reset points
                }}
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Restart Game
            </button>
        </div>
    );
}

export default Game;
