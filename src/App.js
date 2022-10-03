import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import GameMenu from "./components/GameMenu";
import Card from "./components/Card";
import { images } from "./components/Images";
import Confetti from "react-confetti";
import NewGame from "./components/NewGame";

export default function App() {
  const [cards, setCards] = useState(images);
  const [gameMode, setGameMode] = useState(true);
  const [score, setScore] = useState({ currScore: 0, bestScore: 0 });
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);

  useEffect(() => {
    const allChosen = cards.every((card) => card.isChosen);
    allChosen ? setGameWon(true) : setGameWon(false);
  }, [cards]);

  function hardMode() {
    setGameMode(!gameMode);
  }

  function shuffleCards() {
    return setCards((oldCards) =>
      [...oldCards].sort(() => Math.random() - 0.5)
    );
  }

  function handleClick(card, id) {
    if (card.isChosen) {
      setGameLost(true);
      score.currScore > score.bestScore
        ? setScore({ ...score, currScore: 0, bestScore: score.currScore })
        : setScore({ ...score, currScore: 0 });
    } else {
      toggleChosen(id);
      shuffleCards();
      setScore({ ...score, currScore: score.currScore + 1 });
    }
  }

  function toggleChosen(id) {
    setCards((oldCards) => {
      return oldCards.map((card) => {
        return card.id === id && card.isChosen === false
          ? {
              ...card,
              isChosen: !card.isChosen,
            }
          : card;
      });
    });
  }

  function newGame() {
    setGameLost(false);
    setCards(images);
    setScore({ ...score, currScore: 0 });
    shuffleCards();
  }

  const content = cards.map((card) => (
    <Card
      key={card.id}
      id={card.id}
      card={card}
      src={gameMode ? `${card.src}` : `${card.hardSrc}`}
      handleClick={(event) => handleClick(card, card.id)}
    />
  ));

  // console.log(cards);

  return (
    <div className="container">
      <Header bestScore={score.bestScore} currScore={score.currScore} />
      <div className="cardGrid--container">
        <div className="cardGrid">{content}</div>
      </div>
      <GameMenu gameMode={gameMode} handleClickHard={hardMode} />
      {gameLost && <NewGame handleClickNew={newGame} />}
      {gameWon && <Confetti />}
    </div>
  );
}
