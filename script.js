//                                Todo-list
let input, text, button, body;
input = document.querySelector("#input");
button = document.querySelector("#button");
text = document.querySelector("#text");
body = document.querySelector(".body");

let ul = document.createElement("ul");
body.appendChild(ul);

button.addEventListener("click", function () {
  if (input.value.length > 0) {
    Add();
  } else {
    alert("add some text");
  }
});

// e= event
input.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    if (input.value.length > 0) {
      Add();
    } else {
      alert("add some text");
    }
  }
});

function Add() {
  let listetim = document.createElement("li");
  listetim.textContent = input.value;

  ul.appendChild(listetim);
  let btndelt = document.createElement("button");
  btndelt.textContent = "delete";

  listetim.appendChild(btndelt);
  input.value = "";
  btndelt.addEventListener("click", function () {
    listetim.remove();
  });
}
