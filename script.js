const container = document.querySelector(".container");

// a function that changes the color of the box n hover
function handleMouseOver(event) {
  // Change the color to yellow
  event.target.style.backgroundColor = "#E77728";
}

// creating the boxes
for (i = 0; i < 256; i++) {
  divs = document.createElement("div");
  divs.classList.add("divv");
  divs.style.cssText =
    "width: 40px; height: 30px; background: #EDB230; flex: 0 0 calc(6.25% - 1px);";

  divs.addEventListener("mouseover", handleMouseOver);

  container.appendChild(divs);
}
