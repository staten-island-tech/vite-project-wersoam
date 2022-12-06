import "./style.css";
import { cards } from "./array";
cards
  .filter((limited) => limited.type === "toy")
  .forEach((card) => console.log(card.name));
const domselector = {
  background: document.getElementById("background"),
  button: document.queryselector("#input"),
};
function color(background) {
  background.style.backgroundColor = "red";
}
domselector.button.addEventListener("click", function (background) {
  color(domselector.background);
});
