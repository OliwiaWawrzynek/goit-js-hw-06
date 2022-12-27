const color = document.querySelector("body");
const colorValue = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

color.addEventListener("click", () => {
    color.style.backgroundColor = getRandomHexColor();  
}
);

color.addEventListener("click", () => {
    colorValue.textContent = getRandomHexColor();
}
);
