const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    form.elements.email.value.length === 0 ||
    form.elements.password.value.length === 0
  ) {
    alert("Все поля должны быть заполнены!");
  } else {
    const reply = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(reply);
    form.reset();
  }
});
