import { useState, useEffect } from "react";

export const Field = ({ time, setPoints }) => {
    const [activeMole, setActiveMole] = useState(null);
    const gridSize = 6; // 4x4 grid

    useEffect(() => {
        let interval;

        if (time > 0) {
            interval = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * gridSize * gridSize);
                setActiveMole(randomIndex);
            }, 1000);
        } else {
            setActiveMole(null); // Stop the mole when time ends
        }

        return () => clearInterval(interval);
    }, [time]);

    const handleClick = (index) => {
        if (index === activeMole) {
            setPoints((prevPoints) => prevPoints + 1);
            setActiveMole(null); // Remove the mole immediately
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-6 gap-2 p-2">
                {Array.from({ length: gridSize * gridSize }).map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`h-24 w-24  flex items-center justify-center cursor-pointer ${
                            activeMole === index && "bg-amber-900" 
                        }`}

                    >
                        {activeMole === index && <span className='text-3xl '>🐹</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};
