const refs = {
  counter: document.querySelector("#value"),
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.decrement.addEventListener("click", onBtnDecrementClick);
refs.increment.addEventListener("click", onBtnIncrementClick);
function onBtnDecrementClick() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}

function onBtnIncrementClick() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}
