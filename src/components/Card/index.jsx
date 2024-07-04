import "../../App.css";
import "./index.css";

function Card({ deck }) {
  return deck.map((i) => (
    <img
      className="card-img"
      key={`${i.suit}-${i.value}`}
      src={`assets/${i.suit}/Rank=${i.value}, Suit=${i.suit}.png`}
      alt=""
    />
  ));
}

export default Card;
