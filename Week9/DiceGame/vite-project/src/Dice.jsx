import React, { useState } from "react";
import { motion } from "framer-motion";
import dice1 from './images/dice1.png';
import dice2 from './images/dice2.png';
import dice3 from './images/dice3.png';
import dice4 from './images/dice4.png';
import dice5 from './images/dice5.png';
import dice6 from './images/dice6.png';
import './Dice.css';

const images = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6
};

function Dice() {
    const [playerName, setPlayerName] = useState("Player1");
    const [playerDice, setPlayerDice] = useState(1);
    const [computerDice, setComputerDice] = useState(1);
    const [rolling, setRolling] = useState("");
    const [result, setResult] = useState(false);

    const rollDice = () => {
        setRolling(true);
        let interval = setInterval(() => {
            setPlayerDice(Math.floor(Math.random() * 6) + 1);
            setComputerDice(Math.floor(Math.random() * 6) + 1);
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            const playerRoll = Math.floor(Math.random() * 6) + 1;
            const computerRoll = Math.floor(Math.random() * 6) + 1;
            setPlayerDice(playerRoll);
            setComputerDice(computerRoll);
            setRolling(false);

            if (playerRoll > computerRoll) {
                setResult(`${playerName} Kazandı! 🏆`);
            } else if (playerRoll < computerRoll) {
                setResult("Bilgisayar Kazandı! 🤖");
            } else {
                setResult("Berabere! 🤝");
            }
        }, 3000);
    };

    return (
        <div className="container">
            <h1 className>{result || "Zar At! 🎲"}</h1>
            <div className="dice-container">
                <motion.img
                    src={images[playerDice]}
                    alt="Player Dice"
                    className="dice"
                    animate={{ rotate: rolling ? 360 : 0 }}
                    transition={{ duration: 0.5, repeat: rolling ? Infinity : 0 }}
                />
                <span>VS</span>
                <motion.img
                    src={images[computerDice]}
                    alt="Computer Dice"
                    className="dice"
                    animate={{ rotate: rolling ? 360 : 0 }}
                    transition={{ duration: 0.5, repeat: rolling ? Infinity : 0 }}
                />
            </div>
            <input
                type="text"
                placeholder="Adınızı girin"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="input-field"
            />
            <button onClick={rollDice} disabled={rolling} className="roll-button">
                {rolling ? "Zarlar Dönüyor..." : "Zar At 🎲"}
            </button>
        </div>
    );
};
export default Dice;