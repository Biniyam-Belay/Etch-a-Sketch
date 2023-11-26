const container = document.querySelector(".container");
let gridSize;

// a function that changes the color of the box n hover
function handleMouseOver(event) {
  // Change the color to yellow
  event.target.style.backgroundColor = "#E77728";
}

function createGrid(gridsize) {
  // creating the boxes
  for (i = 0; i < gridsize * gridsize; i++) {
    divs = document.createElement("div");
    divs.classList.add("divv");
    divs.style.cssText =
      "width: 40px; height: 30px; background: #EDB230; flex: 0 0 calc(6.25% - 1px);";

    divs.addEventListener("mouseover", handleMouseOver);

    container.appendChild(divs);
  }
}


let btn = document.getElementById('aply');
btn.addEventListener("click", () => {
    gridSize = parseInt(document.getElementById("quantity").value);
    createGrid(gridSize);
    console.log(gridSize);
});