const input = document.querySelector('#validation-input');

input.addEventListener('change', onValidate);

function onValidate(event) {
  if (`${event.currentTarget.value.length}` === input.dataset.length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
