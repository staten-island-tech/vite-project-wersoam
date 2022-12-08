import "./style.css";
import { cards } from "./array";
cards
  .filter((limited) => limited.type === "toy")
  .forEach((card) => console.log(card.name));
//array check working
const domselector = {
  button: document.getElementById("input"),
  box: document.getElementById("background"),
};
function theme() {
  var box = document.body;
  box.classList.toggle("light-mode");
}
//day 1 why does it not work ahhhhh(theme changing in progress)
//day 2 trying to use on click now but its also not working
