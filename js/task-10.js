const boxes = document.querySelector("#boxes");
const input = document.querySelector("input")
const creation = document.querySelector("[data-create");
const destruction = document.querySelector("[data-destroy]");
const amount = document.querySelector("input")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

creation.addEventListener("click", (event) =>
    createBoxes(amount.value));

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++) {
    const newBox = document.createElement("div");
    boxes.append(newBox);
    let sizer = 20 + i * 10;
    newBox.style.width = `${sizer}px`;
    newBox.style.height = `${sizer}px`;
    newBox.style.backgroundColor = getRandomHexColor();
  }
};

destruction.addEventListener("click", function destroyBoxes(event) {
    for (let i = boxes.children.length - 1; i >= 0; i--) {
        boxes.children[i].remove();
    }
});