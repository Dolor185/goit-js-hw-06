function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("#controls input"),
};

refs.create.addEventListener("click", () => {
  createBoxes(refs.input.value);
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const sizes = 30 + 10 * i;
    const element = document.createElement("div");
    element.style.width = `${sizes}px`;
    element.style.height = `${sizes}px`;
    element.style.backgroundColor = getRandomHexColor();
    refs.boxes.append(element);
  }
}

refs.destroy.addEventListener("click", () => {
  refs.boxes.innerHTML = "";
});
