const boxes = document.querySelector("#boxes");
const input = document.querySelector("input")
const creation = document.querySelector("[data-create");
const destruction = document.querySelector("[data-destroy]");

let initialSize = 30;
const initialData = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

creation.addEventListener("click", () => {

for (let i = 0; i < input.value; i++) {
    const newBox = document.createElement("div");

    newBox.style.width = `${initialSize}px`;
    newBox.style.height = `${initialSize}px`;
    newBox.style.backgroundColor = `${getRandomHexColor()}`;
    initialSize += 10;
    boxes.appendChild(newBox);
  }
});

destruction.addEventListener("click", () => {
  boxes.innerHTML = "";
  initialSize = initialData;
});