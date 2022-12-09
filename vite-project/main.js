import "./style.css";
import { cards } from "./array";
cards
  .filter((limited) => limited.type === "toy")
  .forEach((card) => console.log(card.name));
//array check working
const dom = {
  button: document.getElementById("input"),
  box: document.querySelector("#background"),
};
dom.button.addEventListener("click", function () {
  theme();
});
function theme(background) {
  var background = dom.box;
  background.style.backgroundColor = "white";
}
//day 1 why does it not work ahhhhh(theme changing in progress)
//day 2 trying to use on click now but its also not working
// day 3 why is background and style null now?
