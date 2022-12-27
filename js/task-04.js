let newValue = document.querySelector("#value");
let counterValue = parseInt(newValue.textContent);
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

function clickDecrement() {
    counterValue -= 1;
    newValue.innerHTML = `<span id="value">${counterValue}</span>`;
}

function clickIncrement() {
    counterValue += 1;
    newValue.innerHTML = `<span id="value">${counterValue}</span>`;
}

decrementButton.addEventListener("click", clickDecrement);
incrementButton.addEventListener("click", clickIncrement);