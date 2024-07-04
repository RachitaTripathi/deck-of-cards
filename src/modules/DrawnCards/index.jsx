/* eslint-disable react/prop-types */
import "../../App.css";
import "./index.css";
import Card from "../../components/Card";
import { values, suits } from "../../config";
import { useState } from "react";

function DrawnCards({ drawedCards, remainingCards }) {
  const sortDeck = (deck) => {
    return deck.sort((cardA, cardB) => {
      if (cardA.suit === cardB.suit) {
        return values.indexOf(cardA.value) - values.indexOf(cardB.value);
      }
      return suits.indexOf(cardA.suit) - suits.indexOf(cardB.suit);
    });
  };

  const [showSorted, setShowSorted] = useState(false);

  const handleSort = () => {
    setShowSorted(true);
    sortDeck(drawedCards);
  };

  return (
    <>
      <h1>Random Drawn Cards from the deck</h1>
      <button className="sort-btn" onClick={handleSort}>
        Sort Cards
      </button>
      <div>
        {showSorted ? (
          <Card deck={sortDeck(drawedCards)} />
        ) : (
          <Card deck={drawedCards} />
        )}
      </div>
      <h2>Remaining Deck</h2>
      <div>
        <Card deck={remainingCards} />
      </div>
    </>
  );
}

export default DrawnCards;
