import "./style.css";
import { cards } from "./array";
cards;

const dom = {
  button: document.querySelector(".btn"),
  background: document.querySelector(".background"),
  toy: document.getElementById("toys"),
  food: document.getElementById("food"),
  supplies: document.getElementById("supplies"),
  box: document.querySelector(".box"),
  box2: document.querySelector(".box2"),
  display: document.querySelector("#text"),
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
//day 3 html added, trying to delete after switching
dom.toy.addEventListener("click", function () {
  gone(), toys();
});
dom.food.addEventListener("click", function () {
  gone(), eat();
});
dom.supplies.addEventListener("click", function () {
  gone(), stuff();
});
const toys = function () {
  cards
    .filter((limited) => limited.type === "toy" && limited.row === "1")
    .forEach((card) =>
      dom.box.insertAdjacentHTML(
        "beforeend",
        `
<div class="text"> <img src="${card.picture}" width ="300px" height="300px"> <h2>${card.name}:  only ${card.stock} left!</h2></div>
`
      )
    );
  cards
    .filter((limited) => limited.type === "toy" && limited.row === "2")
    .forEach((card) =>
      dom.box2.insertAdjacentHTML(
        "beforeend",
        `
<div class="text"> <img src="${card.picture}" width ="300px" height="300px"> <h2>${card.name}:  only ${card.stock} left!</h2></div>
`
      )
    );
};
const eat = function () {
  cards
    .filter((limited) => limited.type === "food" && limited.row === "1")
    .forEach((card) =>
      dom.box.insertAdjacentHTML(
        "beforeend",
        `
<div class="text"> <img src="${card.picture}" width ="300px" height="300px"> <h2>${card.name}:  only ${card.stock} left!</h2></div>
`
      )
    );
  cards
    .filter((limited) => limited.type === "food" && limited.row === "2")
    .forEach((card) =>
      dom.box2.insertAdjacentHTML(
        "beforeend",
        `
<div class="text"> <img src="${card.picture}" width ="300px" height="300px"> <h2>${card.name}:  only ${card.stock} left!</h2></div>
`
      )
    );
};

const stuff = function () {
  cards
    .filter((limited) => limited.type === "common items" && limited.row === "1")
    .forEach((card) =>
      dom.box.insertAdjacentHTML(
        "beforeend",
        `
<div class="text"> <img src="${card.picture}" width ="300px" height="300px"> <h2>${card.name}:  only ${card.stock} left!</h2></div>
`
      )
    );
  cards
    .filter((limited) => limited.type === "common items" && limited.row === "2")
    .forEach((card) =>
      dom.box2.insertAdjacentHTML(
        "beforeend",
        `
<div class="text"> <img src="${card.picture}" width ="300px" height="300px"> <h2>${card.name}:  only ${card.stock} left!</h2></div>
`
      )
    );
};
const gone = function () {
  dom.box.innerHTML = "";
  dom.box2.innerHTML = "";
};
