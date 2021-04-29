import React, { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import game from './game';

export default function MemoryGame() {

    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(game.createCardsFromTechs());
    }, []);


    function restart() {
        setGameOver(false);
    }

    return (
        <div>
            <GameBoard cards={cards} />
            <GameOver show={gameOver} handleRestart={restart} />
        </div>
    );
}