const inputWindow = document.getElementById("validation-input");
const lengthValue = inputWindow.getAttribute("data-length");

inputWindow.addEventListener("blur", () => {
  if (parseInt(lengthValue) === inputWindow.value.trim().length) {
    
    inputWindow.classList.add("valid");
    inputWindow.classList.remove("invalid");
  } else {
    inputWindow.classList.add("invalid");
    inputWindow.classList.remove("valid");
  }
});