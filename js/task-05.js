const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInput);
function onInput() {
  refs.name.textContent = refs.input.value;
}
