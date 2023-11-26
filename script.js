const container = document.querySelector(".container");

// a function that changes the color of the box n hover
function handleMouseOver(event) {
  // Change the color to yellow
  event.target.style.backgroundColor = "#E77728";
}

function createGrid(gridsize) {
  // Get the container width and height
  let containerWidth = container.clientWidth;
  let containerHeight = container.clientHeight;

  // Calculate the width and height for each grid item
  let gridItemWidth = containerWidth / gridSize;
  let gridItemHeight = containerHeight / gridSize;

  // creating the boxes
  for (i = 0; i < gridsize ** 2; i++) {
    divs = document.createElement("div");
    divs.classList.add("divv");
    divs.style.cssText = `width: ${gridItemWidth}px; height: ${gridItemHeight}px; background: #EDB230;`;

    divs.addEventListener("mouseover", handleMouseOver);

    container.appendChild(divs);
  }
}

let btn = document.getElementById("aply");
btn.addEventListener("click", () => {
  gridSize = parseInt(document.getElementById("quantity").value);
  // Clear the existing grid
  container.innerHTML = "";
  createGrid(gridSize);
  console.log(gridSize);
});

// TODO: Updated the action button, now it creates grids with dynamic width and height but it gets out of the container so, next time try to constraint the grids within the container.