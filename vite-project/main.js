import "./style.css";
import { cards } from "./array";
cards
  .filter((limited) => limited.type === "toy")
  .forEach((card) => console.log(card.name));
//array check working
const dom = {
  button: document.querySelector(".btn"),
  box: document.querySelector("#background"),
  toy: document.getElementById("toys"),
  food: document.getElementById("food"),
  supplies: document.getElementById("supplies"),
};

dom.button.addEventListener("click", function () {
  if (document.body.classList.contains("Coral")) {
    document.body.classList.add("bright");
    document.body.classList.remove("Coral");
  } else {
    document.body.classList.add("Coral");
    document.body.classList.remove("bright");
  }
});
dom.button.addEventListener("click", function () {
  if (document.body.classList.contains("tropical")) {
    document.body.classList.add("coffee");
    document.body.classList.remove("tropical");
  } else {
    document.body.classList.add("tropical");
    document.body.classList.remove("coffee");
  }
});
//day 1 why does it not work ahhhhh(theme changing in progress)
//day 2 trying to use on click now but its also not working
// day 3 why is background and style null now?
// day 4 should have watched the video sooner

// day 1 creating html
document.createElement("div"){

};
