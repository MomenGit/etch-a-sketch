const creatorBtn = document.getElementById("creator-btn");

creatorBtn.addEventListener("click", getUserSizeEntry);

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
  cell.style.width = `${sizing}vw`;
  cell.style.height = `${sizing}vw`;

  return cell;
}
