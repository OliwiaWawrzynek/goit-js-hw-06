const form = document.querySelector(".login-form");
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const {
    elements: {email, password}
  } = e.currentTarget; 

  if (email.value === "" || password.value === "") {
    window.alert("Warning: all fields should be completed.");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
};