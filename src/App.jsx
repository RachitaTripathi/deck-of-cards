import { useState } from "react";
import { pullAll } from "lodash";

import "./App.css";
import { deck, suits, values } from "./config";

import Cards from "./modules/Cards";
import ShuffledCards from "./modules/ShuffledCards";
import DrawnCards from "./modules/DrawnCards";

function App() {
  // Initialize the deck
  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push({ value, suit });
    });
  });

  function createDeck() {
    return suits.flatMap((suit) => values.map((value) => ({ value, suit })));
  }
  const myDeck = createDeck();

  const [showCards, setShowCards] = useState(false);
  const [shuffledCards, setShuffledCards] = useState(false);
  const [drawedCards, setDrawedCards] = useState(false);

  const handleClick = () => {
    setShowCards(true);
  };

  const drawCards = (length) => {
    let arrayCopy = [...myDeck];
    let newArray = [];
    for (let i = 0; i < length; i++) {
      let randNum = Math.floor(Math.random() * arrayCopy.length);
      let splicedItem = arrayCopy.splice(randNum, 1)[0];
      newArray.push(splicedItem);
    }
    return newArray;
  };

  const drewCards = drawCards(10);

  const leftCards = () => {
    let concat = myDeck.concat(drewCards);
    return pullAll(concat, drewCards);
  };

  const handleShuffle = () => {
    setShuffledCards(true);
    shuffleCards(myDeck);
  };

  const handleDraw = () => {
    setDrawedCards(true);
  };

  const shuffleCards = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
  };

  const result = () => {
    if (shuffledCards) {
      return <ShuffledCards shuffledDeck={shuffleCards(myDeck)} />;
    }
    if (drawedCards) {
      return (
        <DrawnCards drawedCards={drewCards} remainingCards={leftCards()} />
      );
    } else {
      return (
        <>
          <h1>My Deck</h1>
          <button onClick={handleShuffle}>Shuffle Cards</button>
          <button className="draw-btn" onClick={handleDraw}>
            Draw Cards
          </button>
          <Cards myDeck={myDeck} />
        </>
      );
    }
  };

  return (
    <>
      {showCards ? (
        result()
      ) : (
        <>
          <h1>Hello Mr. Magician</h1>
          <h2>Please pick the deck of card</h2>
          <button onClick={handleClick}>
            <img
              src="assets/Card Back.png"
              height="250px"
              width="auto"
              alt=""
            />
          </button>
        </>
      )}
    </>
  );
}

export default App;
