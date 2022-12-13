import "./style.css";
import { cards } from "./array";
cards
  .filter((limited) => limited.type === "toy")
  .forEach((card) => console.log(card.name));
//array check working
const dom = {
  button: document.querySelector(".btn"),
  box: document.querySelector("#background"),
};

dom.button.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("dark");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("dark");
  }
});

//day 1 why does it not work ahhhhh(theme changing in progress)
//day 2 trying to use on click now but its also not working
// day 3 why is background and style null now?
