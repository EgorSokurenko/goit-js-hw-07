const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onWriteName);
function onWriteName(event) {
  if (event.currentTarget.value === '') {
    nameEl.textContent = 'незнакомец';
  } else {
    console.log(event.currentTarget.value);
    nameEl.textContent = event.currentTarget.value;
  }
}
