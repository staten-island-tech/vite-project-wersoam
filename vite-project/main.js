import "./style.css";
import { cards } from "./array";
cards
  .filter((limited) => limited.type === "toy")
  .forEach((card) => console.log(card.name));
//array check working
const domselector = {
  button: document.getElementById("input"),
};
function color(background) {
  document.body.style.backgroundColor = background;
}
domselector.button.addEventListener("click", function () {
  color(rgb(155, 255, 222));
});
//why does it not work ahhhhh(theme changing in progress)
