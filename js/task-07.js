const range = document.getElementById("font-size-control");
const span = document.querySelector("#text");

range.addEventListener("input", () => {
    span.style.fontSize = `${range.value}px`;
});