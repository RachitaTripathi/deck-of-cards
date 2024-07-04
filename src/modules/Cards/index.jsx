/* eslint-disable react/prop-types */
import "../../App.css";
import "./index.css";
import Card from "../../components/Card";

function Cards({ myDeck }) {
  const clubs = myDeck.filter((i) => i.suit === "Clubs");
  const diamond = myDeck.filter((i) => i.suit === "Diamond");
  const heart = myDeck.filter((i) => i.suit === "Heart");
  const spades = myDeck.filter((i) => i.suit === "Spades");

  return (
    <>
      <div className="section-card">
        <h3>Clubs</h3>
        <div>
          <Card deck={clubs} />
        </div>
      </div>
      <div className="section-card">
        <h3>Diamonds</h3>
        <div>
          <Card deck={diamond} />
        </div>
      </div>
      <div className="section-card">
        <h3>Hearts</h3>
        <div>
          <Card deck={heart} />
        </div>
      </div>
      <div className="section-card">
        <h3>Spades</h3>
        <div>
          <Card deck={spades} />
        </div>
      </div>
    </>
  );
}

export default Cards;
