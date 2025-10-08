let heading = document.getElementById("main-title");
heading.textContent = "I SEE YOU";
heading.style.colo="firebrick";

let newItem = document.createElement("li");
newItem.textContent = "First Item";

document.querySelector("ul").appendChild(newItem);