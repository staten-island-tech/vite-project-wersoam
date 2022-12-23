import "./style.css";
import { cards } from "./array";
cards
  .filter((limited) => limited.type === "toy")
  .forEach((card) => console.log(card.name));
//array check working
const dom = {
  button: document.querySelector(".btn"),
  background: document.querySelector("#background"),
  toy: document.getElementById("toys"),
  food: document.getElementById("food"),
  supplies: document.getElementById("supplies"),
  box: document.getElementById("box"),
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
  dom.box.innerHTML = "";
  show.toys();
});
dom.food.addEventListener("click", function () {
  dom.box.innerHTML = "";
  show.eat();
});
dom.supplies.addEventListener("click", function () {
  dom.box.innerHTML = "";
  show.stuff();
});
const show = {
  toys: function () {
    cards
      .filter((limited) => limited.type === "toy")
      .forEach((card) =>
        dom.box.insertAdjacentHTML(
          "afterend",
          `
<div class="text"> <img src="${card.picture}" width ="300px" height="300px"> <h2>${card.name}:  only ${card.stock} left!</h2></div>
`
        )
      );
  },
  eat: function () {
    cards
      .filter((limited) => limited.type === "food")
      .forEach((card) =>
        dom.box.insertAdjacentHTML(
          "afterend",
          `
<div class="text"> <img src="${card.picture}" width ="300px" height="300px"> <h2>${card.name}:  only ${card.stock} left!</h2></div>
`
        )
      );
  },

  stuff: function () {
    cards
      .filter((limited) => limited.type === "common items")
      .forEach((card) =>
        dom.box.insertAdjacentHTML(
          "afterend",
          `
<div class="text"> <img src="${card.picture}" width ="300px" height="300px"> <h2>${card.name}:  only ${card.stock} left!</h2></div>
`
        )
      );
  },
};
