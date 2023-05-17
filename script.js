const creatorBtn = document.getElementById("creator-btn");
const normalModeBtn = document.getElementById("normal-mode-btn");
const randomColorBtn = document.getElementById("random-mode-btn");
const eraserBtn = document.getElementById("eraser-btn");
const showBordersBtn = document.getElementById("show-borders-btn");
let mousePressed = 0;
let mode = 0;

creatorBtn.addEventListener("click", getUserSizeEntry);
normalModeBtn.addEventListener("click", (e) => {
  mode = 0;
});
randomColorBtn.addEventListener("click", () => {
  mode = 1;
});
eraserBtn.addEventListener("click", () => {
  mode = 2;
});
showBordersBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach((e) => {
    e.classList.toggle("cell-remove");
  });
});

createGrid(50);

function getUserSizeEntry() {
  let gridSize = 1;
  do {
    gridSize = prompt("Enter new grid size:", gridSize);
  } while (!(gridSize <= 100 && gridSize > 0));
  createGrid(gridSize);
}
function createGrid(size) {
  const grid = document.createElement("section");
  grid.id = "grid";
  if (document.getElementById("grid"))
    document.body.removeChild(document.getElementById("grid"));
  document.body.append(grid);

  for (let i = 0; i < size; i++) {
    grid.append(createRow(size));
  }
}
function createRow(size) {
  const row = document.createElement("div");
  row.classList.toggle("row");

  for (let i = 0; i < size; i++) {
    row.append(createCell(size));
  }
  return row;
}
function createCell(size) {
  const cell = document.createElement("div");
  cell.classList.toggle("cell");
  let sizing = (1 / size) * 100;
  cell.style.width = `${sizing}vmin`;
  cell.style.height = `${sizing}vmin`;
  cell.addEventListener("mouseover", (e) => {
    if (mousePressed) setCellColor(cell);
  });
  cell.addEventListener("mousedown", () => {
    mousePressed = 1;
    setCellColor(cell);
  });
  cell.addEventListener("mouseup", () => {
    mousePressed = 0;
  });

  return cell;
}
function setCellColor(cell) {
  switch (mode) {
    case 0:
      cell.style.backgroundColor = "black";
      break;
    case 1:
      cell.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )})`;
      break;
    case 2:
      cell.style.backgroundColor = "";
    default:
      break;
  }
}
