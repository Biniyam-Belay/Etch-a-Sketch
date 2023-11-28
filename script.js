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
  let gridItemWidth = containerWidth / gridsize;
  let gridItemHeight = containerHeight / gridsize;

  // creating the boxes
  for (i = 0; i < gridsize ** 2; i++) {
    divs = document.createElement("div");
    divs.classList.add("divv");
    divs.style.cssText = `width: ${gridItemWidth}px; height: ${gridItemHeight}px; background: #EDB230; flex: 0 0 calc(6.25% -20px);"`;
    divs.addEventListener("mouseover", handleMouseOver);

    container.appendChild(divs);
  }
}

let btn = document.getElementById("aply");
btn.addEventListener("click", () => {
  gridsize = parseInt(document.getElementById("quantity").value);
  // If the gridsize is less  than the min 16, it sets the gridsize back to the default, 16.
  if (gridsize < 16) {
    gridsize = 16;
  }
  
  // Clear the existing grid
  container.innerHTML = "";
  createGrid(gridsize);
});

// TODO: Updated the action button, now it creates grids with dynamic width and height but it gets out of the container so, next time try to constraint the grids within the container............. ~DONE WITH THIS.

// Fixeed the above issue with the container contraint, and this is the final push, may  be I can play with ui afterwards or the extra exercise on the bottom.