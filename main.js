// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const color = document.querySelectorAll(".color");
const current = document.querySelector("#current-color");

color.forEach((cur) => {
  cur.addEventListener("click", (event) => {
    // console.log(event)
    // console.log(color)
    current.style.backgroundColor = event.target.style.backgroundColor;
  });
});

const cell = document.querySelectorAll(".cell");
// console.log(cell);

cell.forEach((element) => {
  element.addEventListener("click", (event) => {
    // console.log(event);
    event.target.style.backgroundColor = current.style.backgroundColor;
  });
});
