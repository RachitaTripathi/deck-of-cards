/* eslint-disable react/prop-types */
import "../../App.css";
import Card from "../../components/Card";

function ShuffledCards({ shuffledDeck }) {
  return (
    <>
      <h1>Shuffled Deck</h1>
      <div className="shuffle-imgs">
        <Card deck={shuffledDeck} />
      </div>
    </>
  );
}

export default ShuffledCards;
