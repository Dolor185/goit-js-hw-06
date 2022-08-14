const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInput);
function onInput() {
  if (refs.input.value.length === 0) {
    refs.name.textContent = "Anonymous";
  } else {
    refs.name.textContent = refs.input.value;
  }
}
