const refs = {
  inputEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};

refs.inputEl.addEventListener("input", () => {
  refs.textEl.style.fontSize = `${refs.inputEl.value}px`;
});
