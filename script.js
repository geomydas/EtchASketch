const container = document.querySelector(".container");
const button = document.querySelector(".update-size");

for (let i = 0; i < 10000; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
  div.classList.add("square");
  div.addEventListener("mouseenter", () => {
    div.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
  });
}


button.addEventListener("click", () => {
  let gridSize = parseInt(prompt("Enter a number from 1 through 100"));
  if (gridSize > 100) {
    gridSize = 100;
  }
  container.setAttribute(
    "style",
    `grid-template: repeat(${gridSize} , 1fr) / repeat(${gridSize}, 1fr)`
  );
});
