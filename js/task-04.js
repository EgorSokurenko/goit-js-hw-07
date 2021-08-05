const spanEl = document.querySelector('#value');
const allBtn = document.querySelectorAll('#counter button');
const decBtn = allBtn[0];
const incBtn = allBtn[1];

decBtn.addEventListener('click', onDecrement);
incBtn.addEventListener('click', onIncrement);

//
function onDecrement() {
  const counterValue = spanEl.textContent;
  spanEl.textContent = counterValue - 1;
}
function onIncrement() {
  const counterValue = spanEl.textContent;
  spanEl.textContent = +counterValue + 1;
}
