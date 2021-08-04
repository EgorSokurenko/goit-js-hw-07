const spanEl = document.querySelector('#value');
const allBtn = document.querySelectorAll('#counter button');
const decBtn = allBtn[0];
const incBtn = allBtn[1];

decBtn.addEventListener('click', decrementFunc);
incBtn.addEventListener('click', increment);

//
function decrementFunc() {
  const counterValue = spanEl.textContent;
  spanEl.textContent = counterValue - 1;
}
function increment() {
  const counterValue = spanEl.textContent;
  // ТВАРЬЬЬЬ
  spanEl.textContent = +counterValue + 1;
}
