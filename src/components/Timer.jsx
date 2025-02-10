import { useEffect } from "react";

function Timer({ time, setTime, points }) {
    useEffect(() => {
        let interval;

        if (time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => (prevTime > 1 ? prevTime - 1 : 0));
            }, 1000);
        }

        // Clean up the interval
        return () => clearInterval(interval);
    }, [time, setTime]);

    return (
        <div className='bg-green-500 text-white border border-outline rounded-lg shadow-sm p-2'>
            <p>Time: {time}</p>
            <p>Score: {points}</p>
        </div>
    );
}

export default Timer;
