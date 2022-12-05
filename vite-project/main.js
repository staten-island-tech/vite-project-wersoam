import "./style.css";
import { cards } from "./array";
cards
  .filter((limited) => limited.stock < 10)
  .forEach((card) => console.log(card.name));
console.log(cards);
